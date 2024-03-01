import React from 'react';

export default function HeaderNavButton({ content, isFocused, onClick }) {
	return (
		<button
			className={`p-2 uppercase tracking-[0.25em] ${
				isFocused ? 'border-b-2 border-[#dd8560]' : 'text-neutral-400'
			}`}
			onClick={onClick}
		>
			{content}
		</button>
	);
}
