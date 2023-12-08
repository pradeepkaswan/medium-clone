import bcrypt from 'bcrypt';
import User from '../models/User.js';
import {
	validateFullname,
	validateEmail,
	validatePassword,
} from '../utils/validation.js';
import { generateUsername } from '../utils/index.js';

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
		return res.status(200).json({ status: 'success' });
	} catch (err) {
		if (err.code === 11000) {
			return res.status(400).json({ error: 'Email already exists' });
		}
		return res.status(500).json({ error: err.message });
	}
};

export const login = (req, res) => {};
