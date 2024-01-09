import { mongooseConnect } from '@/lib/mongoose';
import { Product } from '@/models/Product';

export default async function handle(req, res) {
	await mongooseConnect();
	const { method } = req;
	if (method === 'GET') {
		const products = await Product.find();
		res.json(
			products.map((product) => {
				const mappedProduct = {
					_id: product._id,
					productName: product.product_name,
					collectionName: product.collection_name,
					price: product.price,
					images: product.images,
					materials: product.materials,
					careDescription: product.care_description,
				};
				return mappedProduct;
			})
		);
	} else if (method === 'POST') {
		const {
			productName,
			collectionName,
			price,
			images,
			materials,
			careDescription,
		} = req.body;
		const newProduct = await Product.create({
			product_name: productName,
			collection_name: collectionName,
			price: price,
			images: images,
			materials: materials,
			care_description: careDescription,
		});
		res.json(newProduct);
	}
}
