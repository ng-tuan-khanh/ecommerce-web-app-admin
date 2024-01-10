import { mongooseConnect } from '@/lib/mongoose';
import { Category } from '@/models/Category';

export default async function handle(req, res) {
	await mongooseConnect();
	const { method } = req;
	const { id } = req.query;
	if (method === 'PUT') {
		const { name, parent } = req.body;
		await Category.updateOne({ _id: id }, { name, parent });
		res.json(true);
	} else if (method === 'DELETE') {
		await Category.deleteOne({ _id: id });
		res.json(true);
	}
}
