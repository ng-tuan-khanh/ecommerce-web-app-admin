import isAuthorized from '@/helpers/auth';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

// Each component should define 3 properties
// auth: true false
// role: customer, employee, manager
// unauthenticated: the redirected url

export default function Auth({ pageRole, children }) {
	const router = useRouter();
	const { data: session, status } = useSession({
		required: true,
		onUnauthenticated() {
			router.replace('/admin/sign-in');
		},
	});
	if (status === 'loading') {
		return <div>Loading...</div>;
	}
	if (!isAuthorized(session.user.role, pageRole)) {
		return (
			<div>
				Unauthorized
				<button onClick={() => signOut()}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
						/>
					</svg>
				</button>
			</div>
		);
	}
	return children;
}
