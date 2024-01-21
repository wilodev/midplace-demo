import React from 'react';

import { StyleSheet } from 'react-native';

import Animated from 'react-native-reanimated';

import { Button as ButtonGUI } from '@gluestack-ui/themed';

import { useButton } from '../hooks/useButton';
import {
	WithDataLength,
	WithCurrentSlideIndex,
	WithFlatListRef,
	WithScrollXPosition
} from '../types/onboardingCommonProps';

type ButtonProps = WithDataLength &
	WithCurrentSlideIndex &
	WithFlatListRef &
	WithScrollXPosition;

const Button = ({
	flatListRef,
	currentSlideIndex,
	dataLength,
	scrollXPosition
}: ButtonProps) => {
	const {
		state: {
			buttonAnimationStyle,
			arrowAnimationStyle,
			textAnimationStyle,
			animatedBackgroundColorStyle
		},
		actions: { handleNextSlide }
	} = useButton({
		flatListRef,
		currentSlideIndex,
		dataLength,
		scrollXPosition
	});
	return (
		<ButtonGUI onPress={handleNextSlide} bg="transparent">
			<Animated.View
				style={[
					styles.container,
					buttonAnimationStyle,
					animatedBackgroundColorStyle
				]}
			>
				<Animated.Text style={[styles.textButton, textAnimationStyle]}>
					Get Started
				</Animated.Text>
				<Animated.Image
					source={require('@/assets/images/icons/arrow-right.png')}
					style={[styles.arrow, arrowAnimationStyle]}
				/>
			</Animated.View>
		</ButtonGUI>
	);
};

export { Button };

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#1e2169',
		padding: 10,
		borderRadius: 100,
		justifyContent: 'center',
		alignItems: 'center',
		overflow: 'hidden'
	},
	arrow: {
		position: 'absolute'
	},
	textButton: { color: 'white', fontSize: 16, position: 'absolute' }
});
