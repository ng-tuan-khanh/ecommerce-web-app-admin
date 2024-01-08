import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

import Navigation from '@/components/Navigation';

export default function Layout({ children }) {
	const { data: session } = useSession();

	if (session) {
		return (
			<div className="w-screen h-screen bg-white text-black flex">
				<Navigation />
				<div className="flex-auto">{children}</div>
			</div>
		);
	}
	return <button onClick={() => signIn('google')}>Log in</button>;
}
