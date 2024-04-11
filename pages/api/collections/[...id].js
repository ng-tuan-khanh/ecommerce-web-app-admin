import { mongooseConnect } from '@/lib/mongoose';
import { Collection } from '@/models/Collection';

export default async function handle(req, res) {
	await mongooseConnect();
	const { method } = req;
	const { id } = req.query;
	if (method === 'PUT') {
		const { name, featured, group } = req.body;
		await Collection.updateOne({ _id: id }, { name, featured, group });
		res.json(true);
	} else if (method === 'DELETE') {
		await Collection.deleteOne({ _id: id });
		res.json(true);
	}
}
