import { mongooseConnect } from '@/lib/mongoose';
import { Category } from '@/models/Category';

export default async function handle(req, res) {
	await mongooseConnect();
	const { method } = req;
	if (method === 'GET') {
		const categories = await Category.find().populate('parent');
		res.json(categories);
	} else if (method === 'POST') {
		const { name, parent } = req.body;
		const newCategory = await Category.create({ name, parent });
		res.json(newCategory);
	}
}
