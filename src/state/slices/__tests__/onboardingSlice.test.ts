import onboardingReducer, { setOnboardingCompleted } from '../onboardingSlice';

describe('onboardingReducer', () => {
	it('should handle initial state', () => {
		expect(onboardingReducer(undefined, { type: 'unknown' })).toEqual({
			completed: false
		});
	});

	it('should handle setOnboardingCompleted', () => {
		const actual = onboardingReducer(
			{ completed: false },
			setOnboardingCompleted(true)
		);
		expect(actual.completed).toEqual(true);
	});
});
