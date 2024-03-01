import Button from '@/components/Button';
import Header from '@/models/Header';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

export default function Landing() {
	const router = useRouter();
	return (
		<>
			<Head>
				<title>Open Fashion | Be Bold, Break Limits</title>
			</Head>
			<div className="relative">
				<Header />
				<div className="absolute top-0 -z-10 w-full h-screen bg-cover bg-no-repeat bg-[url(/lookbook_women_1.jpg)]">
					<div className="absolute left-0 right-0 bottom-10 flex">
						<Button
							className="mx-auto"
							content="Explore Collection"
							onClick={() => router.push('/category')}
						></Button>
					</div>
				</div>
			</div>
		</>
	);
}
