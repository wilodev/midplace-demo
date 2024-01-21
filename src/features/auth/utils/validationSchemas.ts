import * as yup from 'yup';

export const loginValidationSchema = yup
	.object({
		usernameOrEmail: yup
			.string()
			.required('Username or Email is required')
			.test(
				'isValidUsernameOrEmail',
				'Invalid email or username format',
				(value) => {
					if (!value) return false;
					if (value.includes('@')) {
						return yup.string().email().isValidSync(value);
					}
					return !/^\d+$/.test(value.trim());
				}
			),
		password: yup
			.string()
			.required('Password is required')
			.matches(/^\S*$/, 'Password cannot contain spaces')
	})
	.required();
