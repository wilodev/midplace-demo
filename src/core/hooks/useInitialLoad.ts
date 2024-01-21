import { useEffect, useState } from 'react';

import { setAuthCredentials } from '@/state/slices/authSlice';
import { setOnboardingCompleted } from '@/state/slices/onboardingSlice';
import { setLanguage, setThemeMode } from '@/state/slices/uiSlice';

import { useAppDispatch } from './stateHook';
import { StorageService } from '../services/StorageService';
import { OAuthResponse } from '../types/authTypes';
import { LanguageEnum, ThemeModeEnum } from '../types/uiTypes';

export const useInitialLoad = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const dispatch = useAppDispatch();

	useEffect(() => {
		async function prepare() {
			try {
				const store = StorageService.getInstance();
				// Load Theme Mode
				const themeMode =
					((await store.getItem('themeMode')) as ThemeModeEnum) ??
					ThemeModeEnum._DARK;
				// Load Language
				const language =
					((await store.getItem('language')) as LanguageEnum) ??
					LanguageEnum._ES;
				// Load Onboarding
				const onboardingCompleted =
					(await store.getItem('onboardingCompleted')) === 'true';
				// Load Auth Data
				const authData = (await store.getObject('authData')) as OAuthResponse;
				dispatch(setOnboardingCompleted(onboardingCompleted));
				if (authData) {
					dispatch(setAuthCredentials({ oauth: authData }));
				}
				dispatch(setThemeMode(themeMode));
				dispatch(setLanguage(language));
			} catch (error) {
				const errorMessage =
					error instanceof Error ? error.message : 'Unknown error';
				console.error(`Error loading settings: ${errorMessage}`);
			} finally {
				setIsLoaded(true);
			}
		}
		prepare();
	}, []);
	return isLoaded;
};
