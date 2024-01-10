import { Schema, model, models } from 'mongoose';

const productSchema = new Schema({
	product_name: { type: String, required: true },
	category: { type: Schema.Types.ObjectId, ref: 'Category' },
	price: { type: Number, required: true },
	images: { type: [String], required: true },
	materials: { type: String, required: true },
	care_description: { type: String, required: true },
});

export const Product = models.Product || model('Product', productSchema);
