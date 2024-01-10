import Content from '@/components/Content';
import Layout from '@/components/Layout';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Orders() {
	const [orders, setOrders] = useState([]);
	// filter has 3 possible states: all/pending/delivered
	const [filter, setFilter] = useState('pending');
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
		console.log(filter, updateEvent);
	}, [filter, updateEvent]);
	async function onOrderDelivered(order) {
		const updatedOrder = { ...order };
		updatedOrder.state = 'delivered';
		setUpdateEvent(
			await axios.put(`/api/orders/${updatedOrder._id}`, updatedOrder)
		);
	}
	return (
		<Layout>
			<Content>
				<h2 className="text-xl font-semibold mb-6">Orders</h2>
				<table className="table-basic w-full">
					<thead>
						<tr>
							<td>Date</td>
							<td>Customer</td>
							<td>Product</td>
							<td className="w-24">State</td>
						</tr>
					</thead>
					<tbody>
						{orders.map((order) => (
							<tr>
								<td>
									{order.created_at
										.replace('T', ' ')
										.slice(0, 19)}
								</td>
								<td>
									{order.customer.customer_name}
									<br />
									{order.customer.address}
								</td>
								<td>
									{order.quantity +
										' x ' +
										order.product_info.product_name}
								</td>
								<td>
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
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</Content>
		</Layout>
	);
}
