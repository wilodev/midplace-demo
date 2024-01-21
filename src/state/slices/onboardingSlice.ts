import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

interface OnboardingState {
	completed: boolean;
}

const initialState: OnboardingState = {
	completed: false
};

export const onboardingSlice = createSlice({
	name: 'onboarding',
	initialState,
	reducers: {
		setOnboardingCompleted: (state, action: PayloadAction<boolean>) => {
			state.completed = action.payload;
		}
	}
});

export const { setOnboardingCompleted } = onboardingSlice.actions;

export const selectOnboardingCompleted = (state: RootState) =>
	state.onboarding.completed;

export default onboardingSlice.reducer;
