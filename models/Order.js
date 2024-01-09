import { Schema, model, models } from 'mongoose';

const orderSchema = new Schema({
	created_at: { type: Date, default: Date.now(), required: true },
	product_info: {
		type: {
			product_name: { type: String, required: true },
			price: { type: Number, required: true },
		},
		required: true,
	},
	quantity: {
		type: Number,
		required: true,
	},
	customer: {
		type: {
			customer_name: { type: String, required: true },
			address: { type: String, required: true },
		},
		required: true,
	},
	state: {
		type: String,
		enum: ['all', 'pending', 'delivered'],
		required: true,
	},
});

export const Order = models.Order || model('Order', orderSchema);
