import { Schema, model, models } from 'mongoose';

const sizeSchema = new Schema({
	name: { type: String, required: true },
});

export const Size = models.Size || model('Size', sizeSchema);
