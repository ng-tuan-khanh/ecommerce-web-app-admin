import { mongooseConnect } from '@/lib/mongoose';
import { Group } from '@/models/Group';

export default async function handle(req, res) {
	await mongooseConnect();
	const { method } = req;
	if (method === 'GET') {
		const groups = await Group.find();
		res.json(groups);
	}
}
