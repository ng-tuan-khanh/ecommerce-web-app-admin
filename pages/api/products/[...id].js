import { mongooseConnect } from '@/lib/mongoose';
import { Product } from '@/models/Product';

export default async function handle(req, res) {
	await mongooseConnect();
	const { method } = req;
	const { id } = req.query;
	if (method === 'GET') {
		const product = await Product.findById(id);
		res.json(product);
	} else if (method === 'PUT') {
		const {
			_id,
			product_name,
			category,
			price,
			images,
			materials,
			care_description,
		} = req.body;
		await Product.updateOne(
			{ _id },
			{
				product_name,
				category,
				price,
				images,
				materials,
				care_description,
			}
		);
		res.json(true);
	} else if (method === 'DELETE') {
		await Product.deleteOne({ _id: id });
		res.json(true);
	}
}
