import Content from '@/components/Content';
import AdminLayout from '@/components/AdminLayout';
import React from 'react';
import Head from 'next/head';

LandingPage.auth = true;
LandingPage.role = 'employee';

export default function LandingPage() {
	return (
		<>
			<Head>
				<title>Open Fashion | Landing Page</title>
			</Head>
			<AdminLayout>
				<Content>
					<div>This is the landing page settings.</div>
				</Content>
			</AdminLayout>
		</>
	);
}
