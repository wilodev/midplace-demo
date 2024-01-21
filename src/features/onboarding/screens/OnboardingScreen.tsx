import React from 'react';

import Animated from 'react-native-reanimated';

import OnboardingLayout from '@/core/layouts/OnboardingLayout';

import { Bottom } from '../components/Bottom';
import { Slide } from '../components/Slide';
import { useOnboarding } from '../hooks/useOnboarding';
import { slidesData } from '../utils/slidesData';

const OnboardingScreen = () => {
	const {
		state: {
			flatListRef,
			viewabilityConfig,
			scrollXPosition,
			currentSlideIndex
		},
		actions: { scrollHandler, onViewableItemsChanged }
	} = useOnboarding();
	return (
		<OnboardingLayout>
			<Animated.FlatList
				ref={flatListRef}
				data={slidesData}
				onScroll={scrollHandler}
				renderItem={({ item, index }) => (
					<Slide
						key={item.id}
						index={index}
						scrollXPosition={scrollXPosition}
						item={item}
					/>
				)}
				keyExtractor={(item) => item.id}
				scrollEventThrottle={16}
				horizontal
				bounces={false}
				pagingEnabled
				showsHorizontalScrollIndicator={false}
				onViewableItemsChanged={onViewableItemsChanged}
				viewabilityConfig={viewabilityConfig}
			/>
			<Bottom
				slidesData={slidesData}
				flatListRef={flatListRef}
				currentSlideIndex={currentSlideIndex}
				scrollXPosition={scrollXPosition}
			/>
		</OnboardingLayout>
	);
};

export default OnboardingScreen;
