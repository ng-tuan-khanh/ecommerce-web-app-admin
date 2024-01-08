import { Schema, model, models } from 'mongoose';

const productSchema = new Schema({
	product_name: { type: String, required: true },
	collection_name: { type: String, required: true },
	price: { type: Number, required: true },
	materials: { type: String },
	care_description: { type: String },
});

export const Product = models.Product || model('Product', productSchema);
