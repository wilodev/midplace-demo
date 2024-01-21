import React, { ReactNode } from 'react';

import BaseLayout from './BaseLayout';

type OnboardingLayoutProps = {
	children: ReactNode;
};

const OnboardingLayout = ({ children }: OnboardingLayoutProps) => {
	return <BaseLayout>{children}</BaseLayout>;
};

export default OnboardingLayout;
