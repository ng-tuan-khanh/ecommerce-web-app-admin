import React from 'react';

export default function Card({ data, content }) {
	return (
		<div className="flex flex-col justify-center items-center bg-neutral-400/50 rounded-lg p-6 gap-2">
			<span className="text-6xl">{data}</span>
			<span className="text-xl text-center">{content}</span>
		</div>
	);
}
