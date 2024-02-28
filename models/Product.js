import { Schema, model, models } from 'mongoose';
import Collection from './Collection';
import Category from './Category';
import Group from './Group';
import Color from './Color';
import Size from './Size';

const productSchema = new Schema({
	product_name: { type: String, required: true },
	collection_: { type: Schema.Types.ObjectId, ref: 'Collection' },
	category: { type: Schema.Types.ObjectId, ref: 'Category' },
	price: { type: Number, required: true },
	colors: [{ type: Schema.Types.ObjectId, ref: 'Color' }],
	sizes: [{ type: Schema.Types.ObjectId, ref: 'Size' }],
	images: { type: [String], required: true },
	materials: { type: String },
	care_description: { type: String },
});

export const Product = models.Product || model('Product', productSchema);
