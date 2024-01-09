import Content from '@/components/Content';
import Layout from '@/components/Layout';
import ProductForm from '@/components/ProductForm';
import React from 'react';

export default function NewProduct() {
	return (
		<Layout>
			<Content>
				<h2 className="text-xl font-semibold mb-6">Add new product</h2>
				<ProductForm></ProductForm>
			</Content>
		</Layout>
	);
}
