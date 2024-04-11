import { mongooseConnect } from '@/lib/mongoose';
import { Collection } from '@/models/Collection';
import { Group } from '@/models/Group';

export default async function handle(req, res) {
	await mongooseConnect();
	const { method } = req;
	const { featured } = req.query;
	if (method === 'GET') {
		const collections =
			featured === 'true'
				? await Collection.find({ featured: true }).populate('group')
				: await Collection.find().populate('group');
		res.json(collections);
	} else if (method === 'POST') {
		const { name, featured, group } = req.body;
		const newCollection = await Collection.create({
			name,
			featured,
			group,
		});
		res.json(newCollection);
	}
}
