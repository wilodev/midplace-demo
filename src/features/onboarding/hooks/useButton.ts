import { FlatList } from 'react-native';

import {
	interpolateColor,
	useAnimatedStyle,
	withSpring,
	withTiming
} from 'react-native-reanimated';

import { useAppDispatch } from '@/core/hooks/stateHook';
import { useWindowScreenDimensions } from '@/core/hooks/useWindowScreenDimensions';
import { StorageService } from '@/core/services/StorageService';
import { HookOutput } from '@/core/types/hookOutputTypes';
import { setOnboardingCompleted } from '@/state/slices/onboardingSlice';

import { useGetColors } from './useGetColors';
import {
	WithDataLength,
	WithCurrentSlideIndex,
	WithScrollXPosition,
	WithFlatListRef
} from '../types/onboardingCommonProps';
import { SlideData } from '../types/slideProps';
import { slidesData } from '../utils/slidesData';

export interface ButtonState {
	buttonAnimationStyle: {
		width: number;
		height: number;
	};
	arrowAnimationStyle: {
		width: number;
		height: number;
		opacity: 0 | 1;
		transform: {
			translateX: 0 | 100;
		}[];
	};
	textAnimationStyle: {
		opacity: 0 | 1;
		transform: {
			translateX: 0 | -100;
		}[];
	};
	animatedBackgroundColorStyle: {
		backgroundColor: string;
	};
}

export interface ButtonActions {
	handleNextSlide: () => void;
}
/**
 * Hook for creating animated styles for the onboarding button.
 * This hook manages the animation of the button's width, height, and other properties
 * based on the current slide index and the scroll position.
 *
 * @param dataLength - Total number of slides in the onboarding process.
 * @param currentSlideIndex - Current index of the visible slide.
 * @param scrollXPosition - The horizontal scroll position of the onboarding slides.
 * @returns Object containing animated styles for the button and its inner components.
 */
export const useButton = ({
	flatListRef,
	dataLength,
	currentSlideIndex,
	scrollXPosition
}: WithFlatListRef &
	WithDataLength &
	WithCurrentSlideIndex &
	WithScrollXPosition): HookOutput<ButtonState, ButtonActions> => {
	const dispatch = useAppDispatch();
	const { SCREEN_WIDTH } = useWindowScreenDimensions();
	const { appPrimary500, appPrimary600, appPrimary700, appPrimary950 } =
		useGetColors();
	// Constants for animation transitions
	const BUTTON_WIDTH_EXPANDED = 140;
	const BUTTON_WIDTH_COLLAPSED = 60;
	const BUTTON_HEIGHT = 60;
	const ARROW_SIZE = 30;
	const ARROW_TRANSLATE_X = 100;
	const TEXT_TRANSLATE_X = -100;
	const buttonAnimationStyle = useAnimatedStyle(() => {
		return {
			width:
				currentSlideIndex.value === dataLength - 1
					? withSpring(BUTTON_WIDTH_EXPANDED)
					: withSpring(BUTTON_WIDTH_COLLAPSED),
			height: BUTTON_HEIGHT
		};
	});

	const arrowAnimationStyle = useAnimatedStyle(() => {
		return {
			width: ARROW_SIZE,
			height: ARROW_SIZE,
			opacity:
				currentSlideIndex.value === dataLength - 1
					? withTiming(0)
					: withTiming(1),
			transform: [
				{
					translateX:
						currentSlideIndex.value === dataLength - 1
							? withTiming(ARROW_TRANSLATE_X)
							: withTiming(0)
				}
			]
		};
	});

	const textAnimationStyle = useAnimatedStyle(() => {
		return {
			opacity:
				currentSlideIndex.value === dataLength - 1
					? withTiming(1)
					: withTiming(0),
			transform: [
				{
					translateX:
						currentSlideIndex.value === dataLength - 1
							? withTiming(0)
							: withTiming(TEXT_TRANSLATE_X)
				}
			]
		};
	});

	const animatedBackgroundColorStyle = useAnimatedStyle(() => {
		const backgroundColor = interpolateColor(
			scrollXPosition.value,
			[0, SCREEN_WIDTH, 2 * SCREEN_WIDTH],
			[appPrimary500, appPrimary600, appPrimary700, appPrimary950]
		);

		return { backgroundColor };
	});

	const handleNextSlide = async () => {
		if (
			flatListRef.current &&
			currentSlideIndex.value + 1 < slidesData.length
		) {
			const flatListInstance =
				flatListRef.current as unknown as FlatList<SlideData>;
			flatListInstance.scrollToIndex({
				index: currentSlideIndex.value + 1,
				animated: true
			});
		} else {
			try {
				// Guardar en AsyncStorage
				await StorageService.getInstance().setItem(
					'onboardingCompleted',
					'true'
				);
				// Actualizar el estado de Redux
				dispatch(setOnboardingCompleted(true));
			} catch (error) {
				console.error('Error saving onboarding completion:', error);
			}
		}
	};

	return {
		state: {
			buttonAnimationStyle,
			arrowAnimationStyle,
			textAnimationStyle,
			animatedBackgroundColorStyle
		},
		actions: { handleNextSlide }
	};
};
