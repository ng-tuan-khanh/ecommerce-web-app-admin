import React from 'react';

import Navigation from '@/components/Navigation';

export default function AdminLayout({ children }) {
	return (
		<div className="h-screen bg-white text-black flex">
			<Navigation />
			<div className="flex-auto">{children}</div>
		</div>
	);
}
