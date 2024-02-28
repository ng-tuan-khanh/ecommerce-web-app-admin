import { mongooseConnect } from '@/lib/mongoose';
import { Size } from '@/models/Size';

export default async function handle(req, res) {
	await mongooseConnect();
	const { method } = req;
	if (method === 'GET') {
		const sizes = await Size.find();
		res.json(sizes);
	} else if (method === 'POST') {
		const { name } = req.body;
		const newSize = await Size.create({ name });
		res.json(newSize);
	}
}
