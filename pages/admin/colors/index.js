import Content from '@/components/Content';
import AdminLayout from '@/components/AdminLayout';
import React from 'react';

Colors.auth = true;
Colors.role = 'employee';

export default function Colors() {
	return (
		<AdminLayout>
			<Content>
				<div>This is the colors settings.</div>
			</Content>
		</AdminLayout>
	);
}
