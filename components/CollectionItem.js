import React from 'react';
import Button from './Button';
import { useRouter } from 'next/router';

export default function CollectionItem({ navigationUrl, imageUrl, className }) {
	const router = useRouter();
	return (
		<div className={`${className} relative w-full h-screen`}>
			<img
				src={imageUrl}
				className="w-full h-full object-cover object-top"
			></img>
			<div className="absolute left-0 right-0 bottom-10 flex">
				<Button
					className="mx-auto"
					content="Explore"
					onClick={() => router.push(navigationUrl)}
				></Button>
			</div>
		</div>
	);
}
