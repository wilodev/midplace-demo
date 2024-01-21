import React from 'react';

import { Box } from '@gluestack-ui/themed';

import { Dot } from './Dot';
import {
	WithScrollXPosition,
	WithSlidesData
} from '../types/onboardingCommonProps';

type PaginatorProps = WithSlidesData & WithScrollXPosition;
const Paginator = ({ slidesData, scrollXPosition }: PaginatorProps) => {
	return (
		<Box
			flexDirection="row"
			height={40}
			justifyContent="center"
			alignItems="center"
		>
			{slidesData.map((_, index) => {
				return (
					<Dot index={index} scrollXPosition={scrollXPosition} key={index} />
				);
			})}
		</Box>
	);
};

export { Paginator };
