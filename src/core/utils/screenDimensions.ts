import { Dimensions } from 'react-native';

export const getScreenDimensions = () => {
	const { width, height } = Dimensions.get('window');
	return { SCREEN_WIDTH: width, SCREEN_HEIGHT: height };
};
