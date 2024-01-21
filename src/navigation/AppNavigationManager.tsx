import React, { useCallback } from 'react';

import { View } from 'react-native';

import * as SplashScreen from 'expo-splash-screen';

import { useInitialLoad } from '@/core/hooks/useInitialLoad';
import { NavigationApp } from '@/navigation/index';
import { OnboardingScreen } from '@/onboarding/index';
import { selectOnboardingCompleted } from '@/state/slices/onboardingSlice';

import { useAppSelector } from '../core/hooks/stateHook';

export const AppNavigationManager = (): React.JSX.Element | null => {
	const isLoaded = useInitialLoad();
	const onLayoutRootView = useCallback(async () => {
		if (isLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [isLoaded]);
	const onboardingCompleted = useAppSelector(selectOnboardingCompleted);
	if (!isLoaded) {
		return null;
	}
	return (
		<View onLayout={onLayoutRootView}>
			{!onboardingCompleted ? <OnboardingScreen /> : <NavigationApp />}
		</View>
	);
};
