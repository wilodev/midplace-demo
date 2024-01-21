import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';

import { useAppSelector } from '@/core/hooks/stateHook';

import { AuthStack } from './stacks/AuthStack';
import { MainTab } from './tabs/MainTab';

export const NavigationApp = () => {
	const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				{isAuthenticated ? <MainTab /> : <AuthStack />}
			</NavigationContainer>
		</SafeAreaProvider>
	);
};
