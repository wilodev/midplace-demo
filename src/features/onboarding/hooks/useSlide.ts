import {
	Extrapolate,
	interpolate,
	useAnimatedStyle
} from 'react-native-reanimated';

import { useWindowScreenDimensions } from '@/core/hooks/useWindowScreenDimensions';

import { WithIndex, WithScrollXPosition } from '../types/onboardingCommonProps';

/**
 * Hook for creating animated styles for individual onboarding slides.
 * This hook manages animations like opacity and translation based on the slide's position
 * relative to the current scroll position.
 *
 * @param scrollXPosition - The horizontal scroll position of the onboarding slides.
 * @param index - Index of the current slide.
 * @returns Object containing animated styles for the slide's image and title.
 */
export const useSlide = ({
	scrollXPosition,
	index
}: WithScrollXPosition & WithIndex) => {
	const { SCREEN_WIDTH, SCREEN_HEIGHT } = useWindowScreenDimensions();
	const TRANSLATE_X_RANGE = 250;
	const HALF_SCREEN_WIDTH = SCREEN_WIDTH / 2;

	const animatedImageStyle = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateX: interpolate(
						scrollXPosition.value,
						[
							SCREEN_WIDTH * (index - 1),
							SCREEN_WIDTH * index,
							SCREEN_WIDTH * (index + 1)
						],
						[-HALF_SCREEN_WIDTH * 0.5, 0, HALF_SCREEN_WIDTH * 0.5],
						Extrapolate.CLAMP
					)
				}
			]
		};
	});

	const animatedTitleStyle = useAnimatedStyle(() => {
		return {
			opacity: interpolate(
				scrollXPosition.value,
				[
					SCREEN_WIDTH * (index - 0.5),
					SCREEN_WIDTH * index,
					SCREEN_WIDTH * (index + 0.5)
				],
				[0, 1, 0],
				Extrapolate.CLAMP
			),
			transform: [
				{
					translateX: interpolate(
						scrollXPosition.value,
						[
							SCREEN_WIDTH * (index - 1),
							SCREEN_WIDTH * index,
							SCREEN_WIDTH * (index + 1)
						],
						[TRANSLATE_X_RANGE, 0, -TRANSLATE_X_RANGE],
						Extrapolate.CLAMP
					)
				}
			]
		};
	});

	return {
		animatedImageStyle,
		animatedTitleStyle,
		SCREEN_WIDTH,
		SCREEN_HEIGHT
	};
};
