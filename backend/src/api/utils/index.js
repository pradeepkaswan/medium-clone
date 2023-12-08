import { nanoid } from 'nanoid';
import User from '../models/User.js';

export const generateUsername = async (email) => {
	let username = email.split('@')[0];

	const user = await User.findOne({ 'personal_info.username': username });
	if (user) {
		username = `${username}-${nanoid(5)}`;
	}

	return username;
};
