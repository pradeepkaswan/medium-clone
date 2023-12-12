import bcrypt from 'bcrypt';
import User from '../models/User.js';
import {
	validateFullname,
	validateEmail,
	validatePassword,
} from '../utils/validation.js';
import { generateUsername, formatDataToSend } from '../utils/index.js';
import { getAuth } from 'firebase-admin/auth';

export const register = async (req, res) => {
	const { fullname, email, password } = req.body;

	const fullnameError = validateFullname(fullname);
	if (fullnameError) {
		return res.status(400).json({ error: fullnameError });
	}

	const emailError = validateEmail(email);
	if (emailError) {
		return res.status(400).json({ error: emailError });
	}

	const passwordError = validatePassword(password);
	if (passwordError) {
		return res.status(400).json({ error: passwordError });
	}

	const hash = await bcrypt.hash(password, 10);
	const username = await generateUsername(email);
	const user = new User({
		personal_info: { fullname, email, password: hash, username },
	});

	try {
		await user.save();
		return res.status(200).json(formatDataToSend(user));
	} catch (err) {
		if (err.code === 11000) {
			return res.status(400).json({ error: 'Email already exists' });
		}
		return res.status(500).json({ error: err.message });
	}
};

export const login = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ 'personal_info.email': email });
		if (!user) {
			return res.status(403).json({ error: 'Email does not exist' });
		}

		if (!user.google_auth) {
			const match = await bcrypt.compare(password, user.personal_info.password);
			if (!match) {
				return res.status(403).json({ error: 'Incorrect password' });
			}

			return res.status(200).json(formatDataToSend(user));
		} else {
			return res.status(403).json({
				error:
					'You have registered with Google. Please login with your Google account.',
			});
		}
	} catch (err) {
		return res.status(500).json({ error: err.message });
	}
};

export const googleAuth = async (req, res) => {
	let { access_token } = req.body;

	getAuth()
		.verifyIdToken(access_token)
		.then(async (decodedToken) => {
			const { email, name, picture } = decodedToken;

			picture = picture.replace('s96-c', 's384-c');

			let user = await User.findOne({ 'personal_info.email': email })
				.select(
					'personal_info.fullname  personal_info.username personal_info.profile_img google_auth',
				)
				.then((user) => {
					return user || null;
				})
				.catch((err) => {
					return res.status(500).json({ error: err.message });
				});

			if (user) {
				if (!user.google_auth) {
					return res.status(403).json({
						error: 'This email is already registered with another account',
					});
				}
			} else {
				let username = await generateUsername(email);
				user = new User({
					personal_info: {
						fullname: name,
						email,
						username,
						profile_img: picture,
					},
					google_auth: true,
				});
				await user
					.save()
					.then((user) => {
						user = user;
					})
					.catch((err) => {
						return res.status(500).json({ error: err.message });
					});
			}
			return res.status(200).json(formatDataToSend(user));
		})
		.catch((err) => {
			return res.status(500).json({
				error:
					'Failed to authenticate you with Google. Try with some other Google account.',
			});
		});
};
