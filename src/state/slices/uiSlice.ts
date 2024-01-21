// src/state/slices/uiSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LanguageEnum, ThemeModeEnum, UIState } from '@/core/types/uiTypes';

import { RootState } from '../store';

const initialState: UIState = {
	themeMode: ThemeModeEnum._DARK, // o usa un valor predeterminado basado en el sistema del usuario
	language: LanguageEnum._ES // idioma por defecto
};

export const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		setThemeMode: (state, action: PayloadAction<ThemeModeEnum>) => {
			state.themeMode = action.payload;
		},
		setLanguage: (state, action: PayloadAction<LanguageEnum>) => {
			state.language = action.payload;
		}
	}
});

export const { setThemeMode, setLanguage } = uiSlice.actions;

export const selectThemeMode = (state: RootState) => state.ui.themeMode;

export default uiSlice.reducer;
