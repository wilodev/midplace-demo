import React from 'react';

import { Provider } from 'react-redux';

import { StatusBar } from 'expo-status-bar';

import { GluestackUIProvider } from '@gluestack-ui/themed';

import { config } from '@/config/theme/gluestack-ui.config';
import { AppNavigationManager } from '@/navigation/AppNavigationManager';
import { store } from '@/state/store';

export default function App(): React.JSX.Element {
	return (
		<Provider store={store}>
			<GluestackUIProvider config={config}>
				<AppNavigationManager />
				<StatusBar style="auto" />
			</GluestackUIProvider>
		</Provider>
	);
}
