import { mongooseConnect } from '@/lib/mongoose';
import { Color } from '@/models/Color';

export default async function handle(req, res) {
	await mongooseConnect();
	const { method } = req;
	const { id } = req.query;
	if (method === 'PUT') {
		const { name, hex } = req.body;
		await Color.updateOne({ _id: id }, { name, hex });
		res.json(true);
	} else if (method === 'DELETE') {
		await Color.deleteOne({ _id: id });
		res.json(true);
	}
}
