import React from 'react';

import { LinearGradient } from 'expo-linear-gradient';

import { Box } from '@gluestack-ui/themed';

import { Button } from './Button';
import { Paginator } from './Paginator';
import { useGetColors } from '../hooks/useGetColors';
import {
	WithFlatListRef,
	WithCurrentSlideIndex,
	WithScrollXPosition,
	WithSlidesData
} from '../types/onboardingCommonProps';

type BottomProps = WithSlidesData &
	WithFlatListRef &
	WithCurrentSlideIndex &
	WithScrollXPosition;
const Bottom = ({
	slidesData,
	flatListRef,
	currentSlideIndex,
	scrollXPosition
}: BottomProps) => {
	const { appPrimary950 } = useGetColors();
	return (
		<Box width="$full" position="absolute" bottom={0} left={0} right={0}>
			<LinearGradient
				colors={[appPrimary950, 'transparent']}
				start={[1, 1]}
				end={[1, 0]}
				style={{
					flex: 1
				}}
			>
				<Box
					flex={1}
					flexDirection="row"
					justifyContent="space-between"
					alignItems="center"
					marginHorizontal={40}
					paddingVertical={24}
					marginBottom={32}
				>
					<Paginator
						slidesData={slidesData}
						scrollXPosition={scrollXPosition}
					/>
					<Button
						flatListRef={flatListRef}
						currentSlideIndex={currentSlideIndex}
						dataLength={slidesData.length}
						scrollXPosition={scrollXPosition}
					/>
				</Box>
			</LinearGradient>
		</Box>
	);
};

export { Bottom };
