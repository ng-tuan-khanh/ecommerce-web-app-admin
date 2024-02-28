import Card from '@/components/Card';
import Content from '@/components/Content';
import AdminLayout from '@/components/AdminLayout';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';

Dashboard.auth = true;
Dashboard.role = 'employee';

export default function Dashboard() {
	const [numOrders, setNumOrders] = useState(0);
	const [revenue, setRevenue] = useState(0);
	const [numProducts, setNumProducts] = useState(0);
	const [numCustomers, setNumCustomers] = useState(0);

	useEffect(() => {
		axios.get('/api/dashboard').then((response) => {
			const { numOrders, revenue, numProducts, numCustomers } =
				response.data;
			setNumOrders(numOrders);
			setRevenue(revenue);
			setNumProducts(numProducts);
			setNumCustomers(numCustomers);
		});
	}, []);

	return (
		<>
			<Head>
				<title>Open Fashion | Dashboard</title>
			</Head>
			<AdminLayout>
				<Content>
					<h2 className="text-xl font-semibold mb-6">Dashboard</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6">
						<Card
							data={numOrders}
							content={'Delivered Orders'}
						></Card>
						<Card
							data={revenue}
							content={'Total Revenue (USD)'}
						></Card>
						<Card
							data={numProducts}
							content={'Sold Products'}
						></Card>
						<Card
							data={numCustomers}
							content={'Total Customers'}
						></Card>
					</div>
				</Content>
			</AdminLayout>
		</>
	);
}
