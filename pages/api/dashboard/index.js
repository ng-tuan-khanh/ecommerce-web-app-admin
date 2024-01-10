import { mongooseConnect } from '@/lib/mongoose';
import { Order } from '@/models/Order';

export default async function handle(req, res) {
	await mongooseConnect();
	const { method } = req;
	if (method === 'GET') {
		const orders = await Order.find({
			state: 'delivered',
		}).sort('-createdAt');
		const numOrders = orders.length;
		let revenue = 0;
		let numProducts = 0;
		const customers = new Set();
		for (const order of orders) {
			revenue += order.quantity * order.product_info.price;
			numProducts += order.quantity;
			customers.add(order.customer.customer_name);
		}
		const numCustomers = customers.size;
		return res.json({ numOrders, revenue, numProducts, numCustomers });
	}
}
