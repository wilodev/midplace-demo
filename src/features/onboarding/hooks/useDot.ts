import {
	Extrapolation,
	interpolate,
	interpolateColor,
	useAnimatedStyle
} from 'react-native-reanimated';

import { useWindowScreenDimensions } from '@/core/hooks/useWindowScreenDimensions';

import { useGetColors } from './useGetColors';
import { WithIndex, WithScrollXPosition } from '../types/onboardingCommonProps';

/**
 * Hook for creating animated styles for the onboarding dot indicator.
 * It handles the animation based on the current scroll position of the onboarding slides.
 *
 * @param scrollXPosition - The horizontal scroll position of the onboarding slides.
 * @param index - Index of the dot in the paginator.
 * @returns Object containing animated styles for the dot.
 */
export const useDot = ({
	scrollXPosition,
	index
}: WithScrollXPosition & WithIndex) => {
	const { SCREEN_WIDTH } = useWindowScreenDimensions();
	const { appPrimary100, appPrimary200, appPrimary300, appPrimary400 } =
		useGetColors();
	const animatedDotStyle = useAnimatedStyle(() => {
		const widthAnimation = interpolate(
			scrollXPosition.value,
			[
				(index - 1) * SCREEN_WIDTH,
				index * SCREEN_WIDTH,
				(index + 1) * SCREEN_WIDTH
			],
			[10, 20, 10],
			Extrapolation.CLAMP
		);

		const opacityAnimation = interpolate(
			scrollXPosition.value,
			[
				(index - 1) * SCREEN_WIDTH,
				index * SCREEN_WIDTH,
				(index + 1) * SCREEN_WIDTH
			],
			[0.5, 1, 0.5],
			Extrapolation.CLAMP
		);
		return {
			width: widthAnimation,
			opacity: opacityAnimation
		};
	});

	const animatedColor = useAnimatedStyle(() => {
		const backgroundColor = interpolateColor(
			scrollXPosition.value,
			[0, SCREEN_WIDTH, 2 * SCREEN_WIDTH],
			[appPrimary100, appPrimary200, appPrimary300, appPrimary400]
		);

		return {
			backgroundColor
		};
	});
	return { animatedDotStyle, animatedColor };
};
