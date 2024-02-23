import Content from '@/components/Content';
import AdminLayout from '@/components/AdminLayout';
import React from 'react';

Roles.auth = true;
Roles.role = 'manager';

export default function Roles() {
	return (
		<AdminLayout>
			<Content>
				<div>This is the roles settings.</div>
			</Content>
		</AdminLayout>
	);
}
