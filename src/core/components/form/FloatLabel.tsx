import React from 'react';

import Animated from 'react-native-reanimated';

import { useFloatLabel } from '@/core/hooks/useFloatLabel';

const FloatLabel = ({ label }: { label?: string }) => {
	const {
		state: { animatedLabelStyle }
	} = useFloatLabel();
	return <Animated.Text style={animatedLabelStyle}>{label}</Animated.Text>;
};

export default FloatLabel;
