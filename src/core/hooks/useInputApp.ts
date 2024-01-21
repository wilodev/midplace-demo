import { useFloatLabel } from './useFloatLabel';
import { HookOutput } from '../types/hookOutputTypes';

interface InputAppState {
	isFocused: boolean;
	value: string;
}
interface InputAppActions {
	handleFocusInput: () => void;
	handleChangeValueInput: (_value: string) => void;
}
export const useInputApp = (): HookOutput<InputAppState, InputAppActions> => {
	const {
		state: { isFocused, value },
		actions: { setIsFocused, setValue }
	} = useFloatLabel();

	const handleFocusInput = () => setIsFocused(true);

	const handleChangeValueInput = (value: string) => {
		setIsFocused(false);
		setValue(value);
	};

	return {
		state: {
			isFocused,
			value
		},
		actions: { handleFocusInput, handleChangeValueInput }
	};
};
