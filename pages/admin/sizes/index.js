import Content from '@/components/Content';
import AdminLayout from '@/components/helpers/AdminLayout';
import React from 'react';

Sizes.auth = true;

export default function Sizes() {
	return (
		<AdminLayout>
			<Content>
				<div>This is the sizes settings.</div>
			</Content>
		</AdminLayout>
	);
}
