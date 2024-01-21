import React from 'react';

import { Text } from '@gluestack-ui/themed';

const ValidationErrorText = ({ message }: { message?: string }) => {
	return <Text color="$red500">{message}</Text>;
};

export default ValidationErrorText;
