import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { OAuthResponse, User } from '@/core/types/authTypes';

import { RootState } from '../store';

interface AuthState {
	oauth: OAuthResponse | null;
	user: User | null;
	isAuthenticated: boolean;
}

const initialState: AuthState = {
	oauth: null,
	user: null,
	isAuthenticated: false
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCredentials: (
			state,
			action: PayloadAction<{ user: User; oauth: OAuthResponse }>
		) => {
			state.oauth = action.payload.oauth;
			state.user = action.payload.user;
			state.isAuthenticated = true;
		},
		setAuthCredentials: (
			state,
			action: PayloadAction<{ oauth: OAuthResponse }>
		) => {
			state.oauth = action.payload.oauth;
			state.isAuthenticated = true;
		},
		logout: (state) => {
			state.oauth = null;
			state.user = null;
			state.isAuthenticated = false;
		}
	}
});

export const { setCredentials, setAuthCredentials, logout } = authSlice.actions;

export const selectOAuth = (state: RootState) =>
	state.auth.oauth as OAuthResponse;

export const selectUser = (state: RootState) => state.auth.user as User;

export const selectIsAuthenticated = (state: RootState) =>
	state.auth.isAuthenticated;

export default authSlice.reducer;
