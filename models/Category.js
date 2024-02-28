import { Schema, model, models } from 'mongoose';

const categorySchema = new Schema({
	name: { type: String, required: true },
	parent: {
		type: Schema.Types.ObjectId,
		ref: 'Group',
		required: true,
	},
});

export const Category = models.Category || model('Category', categorySchema);
