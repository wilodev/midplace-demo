import { useWindowDimensions } from 'react-native';

export const useWindowScreenDimensions = () => {
	const { width, height } = useWindowDimensions();
	return { SCREEN_WIDTH: width, SCREEN_HEIGHT: height };
};
