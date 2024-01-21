import { useToken } from '@gluestack-style/react';

export const useGetColors = () => {
	const appPrimary100 = useToken('colors', 'appPrimary100');
	const appPrimary200 = useToken('colors', 'appPrimary200');
	const appPrimary300 = useToken('colors', 'appPrimary300');
	const appPrimary400 = useToken('colors', 'appPrimary400');
	const appPrimary500 = useToken('colors', 'appPrimary500');
	const appPrimary600 = useToken('colors', 'appPrimary600');
	const appPrimary700 = useToken('colors', 'appPrimary700');
	const appPrimary950 = useToken('colors', 'appPrimary950');
	return {
		appPrimary100,
		appPrimary200,
		appPrimary300,
		appPrimary400,
		appPrimary500,
		appPrimary600,
		appPrimary700,
		appPrimary950
	};
};
