import React from 'react';

import { Box } from '@gluestack-ui/themed';

import FloatLabel from './FloatLabel';
import InputApp, { InputAppProps } from './InputApp';
import ValidationErrorText from './ValidationErrorText';

interface InputFieldProps extends Omit<InputAppProps, 'children'> {
	label?: string;
	error?: string;
}
const InputField = ({ label, error, ...rest }: InputFieldProps) => {
	return (
		<Box width="$full">
			{label && <FloatLabel label={label} />}
			<InputApp {...rest} width="$full" />
			{error && <ValidationErrorText message={error} />}
		</Box>
	);
};

export default InputField;
