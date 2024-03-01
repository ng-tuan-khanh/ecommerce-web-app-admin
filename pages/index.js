import Header from '@/models/Header';
import Head from 'next/head';
import React from 'react';

export default function Landing() {
	return (
		<>
			<Head>
				<title>Open Fashion | Be Bold, Break Limits</title>
			</Head>
			<Header />
		</>
	);
}
