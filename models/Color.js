import { Schema, model, models } from 'mongoose';

const colorSchema = new Schema({
	name: { type: String, required: true },
	hex: { type: String, required: true },
});

export const Color = models.Color || model('Color', colorSchema);
