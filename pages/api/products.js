import { mongooseConnect } from '@/lib/mongoose';
import { Product } from '@/models/Product';

export default async function handle(req, res) {
	const { method } = req;
	if (method === 'POST') {
		await mongooseConnect();
		const {
			productName,
			collectionName,
			price,
			materials,
			careDescription,
		} = req.body;
		const newProduct = await Product.create({
			product_name: productName,
			collection_name: collectionName,
			price: price,
			materials: materials,
			care_description: careDescription,
		});
		res.json(newProduct);
	}
}
