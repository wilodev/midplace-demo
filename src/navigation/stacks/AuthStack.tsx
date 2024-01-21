import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen } from '@/auth/index';
import { AuthStackParamList } from '@/core/types/navigationTypes';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
	return (
		<Stack.Navigator
			initialRouteName="LoginScreen"
			screenOptions={{
				headerShown: false
			}}
		>
			<Stack.Screen name="LoginScreen" component={LoginScreen} />
		</Stack.Navigator>
	);
};
