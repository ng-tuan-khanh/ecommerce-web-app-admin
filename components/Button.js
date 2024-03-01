import React from 'react';

export default function Button({ className, content, onClick }) {
	return (
		<button
			className={`${className} px-6 py-2 uppercase tracking-[0.25em] bg-neutral-600/75 rounded-full text-white`}
			onClick={onClick}
		>
			{content}
		</button>
	);
}
