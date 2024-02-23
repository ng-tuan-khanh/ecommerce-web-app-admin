import Content from '@/components/Content';
import AdminLayout from '@/components/AdminLayout';
import React from 'react';

Sizes.auth = true;
Sizes.role = 'employee';

export default function Sizes() {
	return (
		<AdminLayout>
			<Content>
				<div>This is the sizes settings.</div>
			</Content>
		</AdminLayout>
	);
}
