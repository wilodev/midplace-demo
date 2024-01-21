import {
	ImageSourcePropType,
	NativeScrollEvent,
	NativeSyntheticEvent,
	ViewToken
} from 'react-native';

import Animated, { SharedValue } from 'react-native-reanimated';
// Interface for the slide data
export interface SlideData {
	id: string; // id of the slide
	title: string; // title of the slide
	subtitle: string; // subtitle of the slide
	image: ImageSourcePropType; // image of the slide
}

// Define the types for state and actions to provide better type checking and intellisense.
export interface OnboardingState {
	flatListRef: React.RefObject<Animated.FlatList<SlideData>>;
	viewabilityConfig: {
		minimumViewTime: number;
		viewAreaCoveragePercentThreshold: number;
	};
	currentSlideIndex: SharedValue<number>;
	scrollXPosition: SharedValue<number>;
}

export interface OnboardingActions {
	scrollHandler: (_event: NativeSyntheticEvent<NativeScrollEvent>) => void;
	onViewableItemsChanged: (_info: { viewableItems: ViewToken[] }) => void;
}
