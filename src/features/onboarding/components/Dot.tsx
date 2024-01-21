import React from 'react';

import { StyleSheet } from 'react-native';

import Animated from 'react-native-reanimated';

import { useDot } from '../hooks/useDot';
import { WithIndex, WithScrollXPosition } from '../types/onboardingCommonProps';

type DotProps = WithIndex & WithScrollXPosition;

const Dot = ({ scrollXPosition, index }: DotProps) => {
	const { animatedDotStyle, animatedColor } = useDot({
		scrollXPosition,
		index
	});

	return (
		<Animated.View style={[styles.dots, animatedDotStyle, animatedColor]} />
	);
};

export { Dot };

const styles = StyleSheet.create({
	dots: {
		height: 4,
		marginHorizontal: 8,
		borderRadius: 6
	}
});
