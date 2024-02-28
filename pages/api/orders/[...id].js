import { mongooseConnect } from '@/lib/mongoose';
import { Order } from '@/models/Order';

export default async function handle(req, res) {
	await mongooseConnect();
	const { method } = req;
	if (method === 'PUT') {
		const { _id, createdAt, productInfo, quantity, customer, state } =
			req.body;
		await Order.updateOne(
			{ _id },
			{
				created_at: createdAt,
				product_info: productInfo,
				quantity: quantity,
				customer: customer,
				state: state,
			}
		);
		res.json(true);
	}
}
