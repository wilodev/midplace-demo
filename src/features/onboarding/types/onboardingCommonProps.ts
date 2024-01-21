import Animated, { SharedValue } from 'react-native-reanimated';

import { SlideData } from './slideProps';

export interface WithScrollXPosition {
	scrollXPosition: SharedValue<number>;
}

export interface WithIndex {
	index: number;
}

export interface WithDataLength {
	dataLength: number;
}

export interface WithFlatListRef {
	flatListRef: React.RefObject<Animated.FlatList<SlideData>>;
}

export interface WithCurrentSlideIndex {
	currentSlideIndex: SharedValue<number>;
}

export interface WithSlidesData {
	slidesData: SlideData[];
}
