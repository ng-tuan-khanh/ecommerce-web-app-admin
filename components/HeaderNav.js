import { Flex, IconButton } from '@radix-ui/themes';
import React from 'react';
import HeaderNavButton from './HeaderNavButton';
import Link from 'next/link';

export default function HeaderNav() {
	return (
		<div className="relative">
			<div className="px-6 py-4">
				<Flex direction="row" align="center" justify="between">
					<Link href="/">
						<img className="w-20" src="/brand_logo.svg"></img>
					</Link>
					<Flex
						className="px-6"
						direction="row"
						align="center"
						justify="between"
						gap="5"
					>
						<HeaderNavButton
							content="Women"
							isFocused={true}
							onClick={() => {}}
						/>
						<HeaderNavButton
							content="Men"
							isFocused={true}
							onClick={() => {}}
						/>
						<HeaderNavButton
							content="Kids"
							isFocused={true}
							onClick={() => {}}
						/>
					</Flex>
					<Flex
						direction="row"
						align="center"
						justify="between"
						gap="3"
					>
						<IconButton
							variant="ghost"
							onClick={() => router.push('/cart')}
						>
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
									d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
								/>
							</svg>
						</IconButton>
						<IconButton
							variant="ghost"
							onClick={() => router.push('/profile')}
						>
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
									d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
								/>
							</svg>
						</IconButton>
					</Flex>
				</Flex>
			</div>
		</div>
	);
}
