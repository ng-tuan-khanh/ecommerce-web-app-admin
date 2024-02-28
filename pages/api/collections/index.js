import { mongooseConnect } from '@/lib/mongoose';
import { Collection } from '@/models/Collection';

export default async function handle(req, res) {
	await mongooseConnect();
	const { method } = req;
	if (method === 'GET') {
		const collections = await Collection.find();
		res.json(collections);
	} else if (method === 'POST') {
		const { name, featured } = req.body;
		const newCollection = await Collection.create({ name, featured });
		res.json(newCollection);
	}
}
