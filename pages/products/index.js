import Layout from '@/components/Layout';
import Link from 'next/link';
import React from 'react';

export default function Products() {
	return (
		<Layout>
			<div className="m-6">
				<Link href="/products/new" className="btn-primary">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12 4.5v15m7.5-7.5h-15"
						/>
					</svg>
					<span>Add new products</span>
				</Link>
			</div>
		</Layout>
	);
}
