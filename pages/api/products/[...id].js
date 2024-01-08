import { mongooseConnect } from '@/lib/mongoose';
import { Product } from '@/models/Product';

export default async function handle(req, res) {
	await mongooseConnect();
	const { method } = req;
	const { id } = req.query;
	if (method === 'GET') {
		const {
			_id,
			product_name: productName,
			collection_name: collectionName,
			price,
			materials,
			care_description: careDescription,
		} = await Product.findById(id);
		res.json({
			_id,
			productName,
			collectionName,
			price,
			materials,
			careDescription,
		});
	} else if (method === 'PUT') {
		const {
			_id,
			productName,
			collectionName,
			price,
			materials,
			careDescription,
		} = req.body;
		await Product.updateOne({
			_id,
			product_name: productName,
			collection_name: collectionName,
			price: price,
			materials: materials,
			care_description: careDescription,
		});
		res.json(true);
	} else if (method === 'DELETE') {
		const deletedCount = await Product.deleteOne({ _id: id });
		res.json(deletedCount);
	}
}
