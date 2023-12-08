import { EMAIL_REGEX, PASSWORD_REGEX } from './constants.js';

const validateFullname = (fullname) => {
	if (fullname.length < 3) {
		return 'Fullname must be at least 3 characters long';
	}
	return null;
};

const validateEmail = (email) => {
	if (!email.length || !EMAIL_REGEX.test(email)) {
		return 'Invalid email address';
	}
	return null;
};

const validatePassword = (password) => {
	if (!PASSWORD_REGEX.test(password)) {
		return 'Password must be at least 6 characters long, and contain at least one number and one uppercase letter';
	}
	return null;
};

export { validateFullname, validateEmail, validatePassword };
