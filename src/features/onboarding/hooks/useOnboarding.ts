import { ViewToken } from 'react-native';

import Animated, {
	useAnimatedRef,
	useAnimatedScrollHandler,
	useSharedValue
} from 'react-native-reanimated';

import { HookOutput } from '@/core/types/hookOutputTypes';

import {
	OnboardingActions,
	OnboardingState,
	SlideData
} from '../types/slideProps';

/**
 * Hook for managing the state and actions of the onboarding carousel.
 * This includes handling the scroll event, managing the current slide index,
 * and providing a reference to the flat list used in the onboarding.
 *
 * @returns The state and actions needed for managing the onboarding process,
 *          including the flat list reference, viewability configuration,
 *          current slide index, and scroll position.
 */
export const useOnboarding = (): HookOutput<
	OnboardingState,
	OnboardingActions
> => {
	// Constants defining the viewability criteria of the slides.
	const MINIMUM_VIEW_TIME = 300; // Time in milliseconds a slide must be in the viewport.
	const VIEW_AREA_COVERAGE_PERCENT_THRESHOLD = 10; // Percentage of the slide that must be in the viewport.

	// Configuration for determining viewable slides.
	const viewabilityConfig = {
		minimumViewTime: MINIMUM_VIEW_TIME,
		viewAreaCoveragePercentThreshold: VIEW_AREA_COVERAGE_PERCENT_THRESHOLD
	};
	// Ref for the flat list used in the onboarding slides.
	const flatListRef = useAnimatedRef<Animated.FlatList<SlideData>>();
	// Animated value for the horizontal scroll position.
	const scrollXPosition = useSharedValue(0);
	// Index of the currently viewable slide.
	const currentSlideIndex = useSharedValue(0);
	// Handler for changes in the viewability of slides.
	const onViewableItemsChanged = ({
		viewableItems
	}: {
		viewableItems: ViewToken[];
	}) => {
		const firstViewableItemIndex = viewableItems[0]?.index ?? 0;
		currentSlideIndex.value = firstViewableItemIndex;
	};
	// Animated scroll handler for the onboarding flat list.
	const scrollHandler = useAnimatedScrollHandler({
		onScroll: (event) => {
			scrollXPosition.value = event.contentOffset.x;
		}
	});

	return {
		state: {
			flatListRef,
			viewabilityConfig,
			scrollXPosition,
			currentSlideIndex
		},
		actions: {
			scrollHandler,
			onViewableItemsChanged
		}
	};
};
