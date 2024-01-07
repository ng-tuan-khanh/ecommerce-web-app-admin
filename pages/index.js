import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home() {
	const { data: session } = useSession();

	if (session) {
		console.log('sign in successfully');
		return <div>Signed in as {session.user.email}</div>;
	}
	return <button onClick={() => signIn('google')}>Log in</button>;
}
