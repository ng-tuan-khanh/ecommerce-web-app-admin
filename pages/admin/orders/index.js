import Content from '@/components/Content';
import AdminLayout from '@/components/AdminLayout';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Heading, Table } from '@radix-ui/themes';

Orders.auth = true;
Orders.role = 'employee';

export default function Orders() {
	const [orders, setOrders] = useState([]);
	// filter has 3 possible states: all/pending/delivered
	const [filter, setFilter] = useState('all');
	const [updateEvent, setUpdateEvent] = useState(null);
	useEffect(() => {
		if (filter === 'all') {
			axios.get('/api/orders').then((response) => {
				setOrders(response.data);
			});
		} else {
			axios.get(`/api/orders?state=${filter}`).then((response) => {
				setOrders(response.data);
			});
		}
	}, [filter, updateEvent]);
	async function onOrderDelivered(order) {
		const updatedOrder = { ...order };
		updatedOrder.state = 'delivered';
		setUpdateEvent(
			await axios.put(`/api/orders/${updatedOrder._id}`, updatedOrder)
		);
	}
	return (
		<>
			<Head>
				<title>Open Fashion | Orders</title>
			</Head>
			<AdminLayout>
				<Content>
					<div className="mb-2">
						<Heading>Orders</Heading>
					</div>
					<Table.Root variant="surface">
						<Table.Header>
							<Table.Row>
								<Table.ColumnHeaderCell
									width="33%"
									justify="center"
								>
									Date
								</Table.ColumnHeaderCell>
								<Table.ColumnHeaderCell
									width="33%"
									justify="center"
								>
									Customer
								</Table.ColumnHeaderCell>
								<Table.ColumnHeaderCell
									width="33%"
									justify="center"
								>
									Product
								</Table.ColumnHeaderCell>
								<Table.ColumnHeaderCell justify="center">
									State
								</Table.ColumnHeaderCell>
							</Table.Row>
						</Table.Header>
						<Table.Body>
							{orders.map((order) => (
								<Table.Row key={order._id} align="center">
									<Table.RowHeaderCell justify="center">
										{order.created_at
											.replace('T', ' ')
											.slice(0, 19)}
									</Table.RowHeaderCell>
									<Table.Cell justify="center">
										{order.customer.customer_name}
										<br />
										{order.customer.address}
									</Table.Cell>
									<Table.Cell justify="center">
										{order.quantity +
											' x ' +
											order.product_info.product_name}
									</Table.Cell>
									<Table.Cell justify="center">
										{order.state === 'pending' ? (
											<button
												onClick={() => {
													onOrderDelivered(order);
												}}
												className="btn-danger w-full"
											>
												<span>Pending</span>
											</button>
										) : (
											<div className="btn-normal w-full">
												<span>Delivered</span>
											</div>
										)}
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
