import React, { ReactNode } from 'react';

import BaseLayout from './BaseLayout';

type MainLayoutProps = {
	children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
	return <BaseLayout>{children}</BaseLayout>;
};

export default MainLayout;
