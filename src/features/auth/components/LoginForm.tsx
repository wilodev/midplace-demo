import React from 'react';

import { Box } from '@gluestack-ui/themed';

import InputField from '@/core/components/form/InputField';

const LoginForm = () => {
	return (
		<Box>
			<InputField label="Email" />
		</Box>
	);
};

export default LoginForm;
