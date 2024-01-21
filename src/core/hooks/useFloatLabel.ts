import { useState } from 'react';

import {
	SharedValue,
	useAnimatedStyle,
	useSharedValue,
	withTiming
} from 'react-native-reanimated';

import { HookOutput } from '../types/hookOutputTypes';

interface FloatLabelState {
	isFocused: boolean;
	value: string;
	labelOffset: SharedValue<number>;
	animatedLabelStyle: {
		position: 'absolute';
		left: number;
		top: number;
		fontSize: number;
		color: string;
	};
}

interface FloatLabelActions {
	setIsFocused: (_isFocused: boolean) => void;
	setValue: (_value: string) => void;
}

export const useFloatLabel = (): HookOutput<
	FloatLabelState,
	FloatLabelActions
> => {
	const [isFocused, setIsFocused] = useState(false);
	const [value, setValue] = useState('');
	const labelOffset = useSharedValue(0);

	useAnimatedStyle(() => {
		labelOffset.value = withTiming(isFocused || value ? -20 : 0, {
			duration: 200
		});

		return {
			transform: [{ translateY: labelOffset.value }],
			fontSize: isFocused || value ? 12 : 16,
			color: isFocused || value ? '#000' : '#aaa'
		};
	}, [isFocused, value]);

	const animatedLabelStyle = useAnimatedStyle(() => ({
		position: 'absolute',
		left: 0,
		top: labelOffset.value,
		fontSize: labelOffset.value ? 12 : 16,
		color: labelOffset.value ? '#000' : '#aaa'
	}));

	return {
		state: {
			isFocused,
			value,
			labelOffset,
			animatedLabelStyle
		},
		actions: {
			setIsFocused,
			setValue
		}
	};
};
