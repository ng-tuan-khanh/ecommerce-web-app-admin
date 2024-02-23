import Content from '@/components/Content';
import AdminLayout from '@/components/helpers/AdminLayout';
import React from 'react';

Roles.auth = true;

export default function Roles() {
	return (
		<AdminLayout>
			<Content>
				<div>This is the roles settings.</div>
			</Content>
		</AdminLayout>
	);
}
