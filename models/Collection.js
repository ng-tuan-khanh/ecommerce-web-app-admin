import { Schema, model, models } from 'mongoose';

const collectionSchema = new Schema({
	name: { type: String, required: true },
	featured: { type: Boolean, required: true },
});

export const Collection =
	models.Collection || model('Collection', collectionSchema);
