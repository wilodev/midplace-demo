import React, { ReactNode } from 'react';

import { Box } from '@gluestack-ui/themed';

type BaseLayoutProps = {
	children: ReactNode;
};

const BaseLayout = ({ children }: BaseLayoutProps) => {
	return (
		<Box
			$dark-bg="$appSecondary950"
			$light-bg="$appSecondary50"
			w="$full"
			h="$full"
		>
			{children}
		</Box>
	);
};

export default BaseLayout;
