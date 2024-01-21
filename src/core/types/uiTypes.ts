export enum ThemeModeEnum {
	_LIGHT = 'light',
	_DARK = 'dark'
}

export enum LanguageEnum {
	_EN = 'en',
	_ES = 'es'
}

export interface UIState {
	themeMode: ThemeModeEnum;
	language: LanguageEnum;
}
