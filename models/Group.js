import { Schema, model, models } from 'mongoose';

const groupSchema = new Schema({
	name: { type: String, required: true },
});

export const Group = models.Group || model('Group', groupSchema);
