import Content from '@/components/Content';
import AdminLayout from '@/components/helpers/AdminLayout';
import React from 'react';

LandingPage.auth = true;

export default function LandingPage() {
	return (
		<AdminLayout>
			<Content>
				<div>This is the landing page settings.</div>
			</Content>
		</AdminLayout>
	);
}
