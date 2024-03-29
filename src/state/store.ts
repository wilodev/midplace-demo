import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slices/authSlice';
import onboardingReducer from './slices/onboardingSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		onboarding: onboardingReducer,
		ui: uiReducer
	}
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
