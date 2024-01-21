import React from 'react';

import { StyleSheet } from 'react-native';

import Animated from 'react-native-reanimated';

import { Box, Text } from '@gluestack-ui/themed';

import { useSlide } from '../hooks/useSlide';
import { WithIndex, WithScrollXPosition } from '../types/onboardingCommonProps';
import { SlideData } from '../types/slideProps';

type SlicePops = WithIndex &
	WithScrollXPosition & {
		item: SlideData;
	};

export const Slide = ({ scrollXPosition, index, item }: SlicePops) => {
	const {
		animatedImageStyle,
		animatedTitleStyle,
		SCREEN_WIDTH,
		SCREEN_HEIGHT
	} = useSlide({
		scrollXPosition,
		index
	});

	const styles = createStyleSheet(SCREEN_WIDTH, SCREEN_HEIGHT);

	return (
		<Box
			alignItems="center"
			justifyContent="center"
			w="$full"
			h="$full"
			position="relative"
			overflow="hidden"
			flex={1}
		>
			<Animated.Image
				source={item.image}
				style={[styles.image, animatedImageStyle]}
			/>
			<Animated.View style={[styles.titleContainer, animatedTitleStyle]}>
				<Text color="$white" size="5xl" fontWeight="$black" maxWidth={310}>
					{item.title}
				</Text>
				<Text color="$white" size="xs" fontWeight="$black" marginTop={16}>
					{item.subtitle}
				</Text>
			</Animated.View>
		</Box>
	);
};

const createStyleSheet = (width: number, height: number) =>
	StyleSheet.create({
		titleContainer: {
			position: 'absolute',
			bottom: 140,
			zIndex: 1,
			width: '100%',
			maxWidth: 500,
			paddingHorizontal: 24
		},
		title: {
			fontSize: 24,
			color: '#fff'
		},
		image: {
			width,
			height,
			resizeMode: 'cover'
		}
	});
