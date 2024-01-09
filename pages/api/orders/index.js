import { mongooseConnect } from '@/lib/mongoose';
import { Order } from '@/models/Order';

export default async function handle(req, res) {
	await mongooseConnect();
	const { method, query } = req;
	if (method === 'GET') {
		if (query?.state) {
			const filteredOrders = await Order.find({
				state: query.state,
			}).sort('-createdAt');
			res.json(filteredOrders);
		}
		const orders = await Order.find().sort('-createdAt');
		res.json(orders);
	} else if (method === 'POST') {
		const { product_info, quantity, customer, state } = req.body;
		const newOrder = await Order.create({
			product_info,
			quantity,
			customer,
			state,
		});
		res.json(newOrder);
	}
}
