import Content from '@/components/Content';
import AdminLayout from '@/components/AdminLayout';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button, Heading, Table } from '@radix-ui/themes';
import Head from 'next/head';

Products.auth = true;
Products.role = 'employee';

export default function Products() {
	const [products, setProducts] = useState([]);
	const [deletedCount, setDeletedCount] = useState(0);
	useEffect(() => {
		axios.get('/api/products').then((response) => {
			setProducts(response.data);
		});
	}, [deletedCount]);
	async function deleteProduct(_id) {
		await axios.delete('/api/products/' + _id);
		setDeletedCount((cnt) => cnt + 1);
	}
	return (
		<>
			<Head>
				<title>Open Fashion | Products</title>
			</Head>
			<AdminLayout>
				<Content>
					<Heading>Products</Heading>
					<div className="mt-2">
						<Link href="/admin/products/new">
							<Button variant="surface">
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
										d="M12 4.5v15m7.5-7.5h-15"
									/>
								</svg>
								<span>Add new products</span>
							</Button>
						</Link>
					</div>

					<Table.Root variant="surface" className="mt-2">
						<Table.Header>
							<Table.Row>
								<Table.ColumnHeaderCell
									width="33%"
									justify="center"
								>
									Product name
								</Table.ColumnHeaderCell>
								<Table.ColumnHeaderCell
									width="33%"
									justify="center"
								>
									Category name
								</Table.ColumnHeaderCell>
								<Table.ColumnHeaderCell
									width="33%"
									justify="center"
								>
									Options
								</Table.ColumnHeaderCell>
							</Table.Row>
						</Table.Header>
						<Table.Body>
							{products.map((product) => (
								<Table.Row key={product._id} align="center">
									<Table.RowHeaderCell>
										{product.product_name}
									</Table.RowHeaderCell>
									<Table.Cell>
										{product.category?.name}
									</Table.Cell>
									<Table.Cell>
										<div className="flex gap-1">
											<Link
												href={
													'/products/edit/' +
													product._id
												}
												className="btn-primary"
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
											</Link>
											<button
												onClick={() =>
													deleteProduct(product._id)
												}
												className="btn-danger"
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
											</button>
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
