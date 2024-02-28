import { mongooseConnect } from '@/lib/mongoose';
import { Color } from '@/models/Color';

export default async function handle(req, res) {
	await mongooseConnect();
	const { method } = req;
	if (method === 'GET') {
		const colors = await Color.find();
		res.json(colors);
	} else if (method === 'POST') {
		const { name, hex } = req.body;
		const newColor = await Color.create({ name, hex });
		res.json(newColor);
	}
}
