import { mongooseConnect } from '@/lib/mongoose';
import { Size } from '@/models/Size';

export default async function handle(req, res) {
	await mongooseConnect();
	const { method } = req;
	const { id } = req.query;
	if (method === 'PUT') {
		const { name } = req.body;
		await Size.updateOne({ _id: id }, { name });
		res.json(true);
	} else if (method === 'DELETE') {
		await Size.deleteOne({ _id: id });
		res.json(true);
	}
}
