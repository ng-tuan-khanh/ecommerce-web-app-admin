import Content from '@/components/Content';
import AdminLayout from '@/components/helpers/AdminLayout';
import React from 'react';

Colors.auth = true;

export default function Colors() {
	return (
		<AdminLayout>
			<Content>
				<div>This is the colors settings.</div>
			</Content>
		</AdminLayout>
	);
}
