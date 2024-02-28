import Content from '@/components/Content';
import AdminLayout from '@/components/AdminLayout';
import React, { useEffect, useState } from 'react';
import { Button, Callout, Heading, Table } from '@radix-ui/themes';
import axios from 'axios';
import Head from 'next/head';

Sizes.auth = true;
Sizes.role = 'employee';

export default function Sizes() {
	const [sizes, setSizes] = useState([]);

	const [editedSize, setEditedSize] = useState('');
	const [name, setName] = useState('');
	const [deletedCount, setDeletedCount] = useState(0);

	const [error, setError] = useState(false);

	useEffect(() => {
		axios.get('/api/sizes').then((response) => {
			setSizes(response.data);
		});
	}, [deletedCount]);

	async function saveSize(ev) {
		ev.preventDefault();

		if (name === '') {
			setError(true);
			return;
		}

		const data = {
			name,
		};
		if (!editedSize) {
			await axios.post('/api/sizes', data);
		} else {
			await axios.put(`/api/sizes/${editedSize._id}`, data);
		}

		setError(false);
		setEditedSize('');
		setName('');
		setDeletedCount((cnt) => cnt + 1);
	}
	async function deleteSize(_id) {
		await axios.delete('/api/sizes/' + _id);
		setDeletedCount((cnt) => cnt + 1);
	}
	function editSize(size) {
		setError(false);
		setEditedSize(size);
		setName(size.name);
	}
	return (
		<>
			<Head>
				<title>Open Fashion | Sizes</title>
			</Head>
			<AdminLayout>
				<Content>
					<Heading>Sizes</Heading>
					<form onSubmit={saveSize}>
						<label className="block mb-1">
							{editedSize ? (
								<>
									<span>Edit </span>
									<span>{editedSize.name}</span>
								</>
							) : (
								'New size'
							)}
						</label>
						<div className="flex-grow flex gap-2">
							<input
								className="flex-grow"
								type="text"
								placeholder="Name"
								value={name}
								onChange={(ev) => setName(ev.target.value)}
							></input>
							<Button size="3" variant="surface" type="submit">
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
										d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
									/>
								</svg>
								Save
							</Button>
						</div>
						{error && (
							<Callout.Root
								color="red"
								role="alert"
								className="mt-2"
							>
								<Callout.Icon>
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
											d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
										/>
									</svg>
								</Callout.Icon>
								<Callout.Text>
									Invalid input. You will need to enter again.
								</Callout.Text>
							</Callout.Root>
						)}
					</form>
					<Table.Root variant="surface" className="mt-6">
						<Table.Header>
							<Table.Row>
								<Table.ColumnHeaderCell
									width="50%"
									justify="center"
								>
									Size
								</Table.ColumnHeaderCell>
								<Table.ColumnHeaderCell
									width="50%"
									justify="center"
								>
									Options
								</Table.ColumnHeaderCell>
							</Table.Row>
						</Table.Header>
						<Table.Body>
							{sizes.map((size) => (
								<Table.Row id={size._id} align="center">
									<Table.RowHeaderCell justify="center">
										{size.name}
									</Table.RowHeaderCell>
									<Table.Cell justify="center">
										<div className="flex gap-2 justify-center">
											<Button
												variant="surface"
												onClick={() => {
													editSize(size);
												}}
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
														d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
													/>
												</svg>
												<span>Edit</span>
											</Button>
											<Button
												variant="surface"
												color="crimson"
												onClick={() =>
													deleteSize(size._id)
												}
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke-width="1.5"
													stroke="currentColor"
													class="w-6 h-6"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
													/>
												</svg>
												<span>Delete</span>
											</Button>
										</div>
									</Table.Cell>
								</Table.Row>
							))}
						</Table.Body>
					</Table.Root>
				</Content>
			</AdminLayout>
		</>
	);
}
