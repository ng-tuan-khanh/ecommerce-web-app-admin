import React from 'react';

export default function Chip({ content, handler }) {
	return (
		<div className="inline-flex border-2 rounded-3xl px-3 py-1 gap-2">
			{content}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="inline-block w-6 h-6 rounded-full hover:bg-neutral-200 cursor-pointer"
				onClick={handler}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M6 18 18 6M6 6l12 12"
				/>
			</svg>
		</div>
	);
}
