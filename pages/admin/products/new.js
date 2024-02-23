import Content from '@/components/Content';
import AdminLayout from '@/components/AdminLayout';
import ProductForm from '@/components/ProductForm';
import React from 'react';

NewProduct.auth = true;
NewProduct.role = 'employee';

export default function NewProduct() {
	return (
		<AdminLayout>
			<Content>
				<h2 className="text-xl font-semibold mb-6">Add new product</h2>
				<ProductForm></ProductForm>
			</Content>
		</AdminLayout>
	);
}
