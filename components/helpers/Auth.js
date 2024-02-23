import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

// Each component should define 3 properties
// auth: true false
// role: customer, employee, manager
// unauthenticated: the redirected url

export default function Auth({ children }) {
	const router = useRouter();
	const { status } = useSession({
		required: true,
		onUnauthenticated() {
			router.replace('/admin/sign-in');
		},
	});
	if (status === 'loading') {
		return <div>Loading...</div>;
	}
	return children;
}
