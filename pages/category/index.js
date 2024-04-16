import Chip from '@/components/Chip';
import HeaderNav from '@/components/HeaderNav';
import { useRouter } from 'next/router';
import React from 'react';

export default function Category() {
	const router = useRouter();
	function filterDelete(filter) {
		delete router.query[filter];
		let params = '',
			url = '';
		for (const [key, value] of Object.entries(router.query)) {
			params = params + key + '=' + value + '&';
		}
		if (params) {
			url = '/category?' + params.slice(0, params.length - 1);
		} else {
			url = '/category';
		}
		router.replace(url);
	}
	return (
		<div>
			<HeaderNav />
			<div className="px-6 py-4 flex flex-none justify-start gap-2">
				{Object.entries(router.query).map(([key, value]) => (
					<Chip content={value} handler={() => filterDelete(key)} />
				))}
			</div>
		</div>
	);
}
