import Layout from '@/components/Layout';
import ProductForm from '@/components/ProductForm';
import React from 'react';

export default function NewProduct() {
	return (
		<Layout>
			<div className="m-6">
				<h2 className="text-xl font-semibold mb-6">Add new product</h2>
				<ProductForm></ProductForm>
			</div>
		</Layout>
	);
}
