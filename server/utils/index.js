import { nanoid } from 'nanoid';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

export const generateUsername = async (email) => {
	let username = email.split('@')[0];

	const user = await User.findOne({ 'personal_info.username': username });
	if (user) {
		username = `${username}-${nanoid(5)}`;
	}

	return username;
};

export const formatDataToSend = (user) => {
	const access_token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

	return {
		access_token,
		profile_img: user.personal_info.profile_img,
		username: user.personal_info.username,
		fullname: user.personal_info.fullname,
	};
};
