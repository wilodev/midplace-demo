import React from 'react';

import { Input, InputField } from '@gluestack-ui/themed';

export type InputAppProps = React.ComponentProps<typeof Input> & {
	placeholder?: string;
};
const InputApp = ({ placeholder = '', ...rest }: InputAppProps) => {
	return (
		<Input
			borderBottomWidth={1}
			borderBottomColor="$appPrimary500"
			borderTopWidth={0}
			borderLeftWidth={0}
			borderRightWidth={0}
			variant="outline"
			{...rest}
		>
			<InputField placeholder={placeholder} />
		</Input>
	);
};

export default InputApp;
