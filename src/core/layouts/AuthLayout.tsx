import React, { ReactNode } from 'react';

import BaseLayout from './BaseLayout';

type AuthLayoutProps = {
	children: ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
	return <BaseLayout>{children}</BaseLayout>;
};

export default AuthLayout;
