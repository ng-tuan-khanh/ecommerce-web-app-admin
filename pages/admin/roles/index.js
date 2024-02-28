import Content from '@/components/Content';
import AdminLayout from '@/components/AdminLayout';
import React from 'react';
import Head from 'next/head';

Roles.auth = true;
Roles.role = 'manager';

export default function Roles() {
	return (
		<>
			<Head>
				<title>Open Fashion | Roles</title>
			</Head>
			<AdminLayout>
				<Content>
					<div>This is the roles settings.</div>
				</Content>
			</AdminLayout>
		</>
	);
}
