import Button from '@/components/Button';
import Header from '@/models/Header';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { animated } from '@react-spring/web';
import CollectionItem from '@/components/CollectionItem';

export default function Landing() {
	const router = useRouter();
	return (
		<>
			<Head>
				<title>Open Fashion | Be Bold, Break Limits</title>
			</Head>
			<div className="relative">
				<Header />
				<div className="scroll-container snap-y snap-mandatory absolute top-0 -z-10 w-full h-screen">
					<CollectionItem
						navigationUrl="/category"
						imageUrl="https://im.uniqlo.com/global-cms/spa/resf90c5a576bea9abb3ed49fb3b161dcf0fr.jpg"
						className="snap-always snap-center"
					/>
					<CollectionItem
						navigationUrl="/category"
						imageUrl="https://im.uniqlo.com/global-cms/spa/resf90c5a576bea9abb3ed49fb3b161dcf0fr.jpg"
						className="snap-always snap-center"
					/>
					<CollectionItem
						navigationUrl="/category"
						imageUrl="https://im.uniqlo.com/global-cms/spa/resf90c5a576bea9abb3ed49fb3b161dcf0fr.jpg"
						className="snap-always snap-center"
					/>
				</div>
			</div>
		</>
	);
}
