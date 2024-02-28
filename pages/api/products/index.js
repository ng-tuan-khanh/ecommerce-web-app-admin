import { mongooseConnect } from '@/lib/mongoose';
import { Product } from '@/models/Product';

export default async function handle(req, res) {
	await mongooseConnect();
	const { method } = req;
	if (method === 'GET') {
		const products = await Product.find().populate([
			'collection_',
			'category',
			'colors',
			'sizes',
		]);
		res.json(products);
	} else if (method === 'POST') {
		const {
			product_name,
			collection_,
			category,
			price,
			images,
			materials,
			care_description,
		} = req.body;
		const newProduct = await Product.create({
			product_name,
			collection_,
			category,
			price,
			images,
			materials,
			care_description,
		});
		res.json(newProduct);
	}
}
