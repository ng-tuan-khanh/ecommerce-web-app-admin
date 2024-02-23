import Content from '@/components/Content';
import AdminLayout from '@/components/AdminLayout';
import React from 'react';

LandingPage.auth = true;
LandingPage.role = 'employee';

export default function LandingPage() {
	return (
		<AdminLayout>
			<Content>
				<div>This is the landing page settings.</div>
			</Content>
		</AdminLayout>
	);
}
