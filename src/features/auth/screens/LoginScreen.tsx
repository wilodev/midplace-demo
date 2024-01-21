import React from 'react';

import { Box, Text } from '@gluestack-ui/themed';

import { AuthLayout } from '@/core/layouts';

import LoginForm from '../components/LoginForm';

const LoginScreen = () => {
	return (
		<AuthLayout>
			<Box justifyContent="center" alignItems="center" flex={1}>
				<Text>Iniciar Sesión</Text>
				<LoginForm />
			</Box>
		</AuthLayout>
	);
};

export default LoginScreen;
