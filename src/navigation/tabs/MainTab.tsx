import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BottomTabParamList } from '@/core/types/navigationTypes';
import { HomeScreen } from '@/home/index';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export const MainTab = () => (
	<Tab.Navigator initialRouteName="Home">
		<Tab.Screen name="Home" component={HomeScreen} />
	</Tab.Navigator>
);
