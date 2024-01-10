import { mongooseConnect } from '@/lib/mongoose';
import { Product } from '@/models/Product';

export default async function handle(req, res) {
	await mongooseConnect();
	const { method } = req;
	if (method === 'GET') {
		const products = await Product.find().populate('category');
		res.json(products);
	} else if (method === 'POST') {
		const {
			product_name,
			category,
			price,
			images,
			materials,
			care_description,
		} = req.body;
		console.log({
			product_name,
			category,
			price,
			images,
			materials,
			care_description,
		});
		const newProduct = await Product.create({
			product_name,
			category,
			price,
			images,
			materials,
			care_description,
		});
		res.json(newProduct);
	}
}
