import Content from '@/components/Content';
import AdminLayout from '@/components/AdminLayout';
import ProductForm from '@/components/ProductForm';
import React from 'react';
import { Heading } from '@radix-ui/themes';
import Head from 'next/head';

NewProduct.auth = true;
NewProduct.role = 'employee';

export default function NewProduct() {
	return (
		<>
			<Head>
				<title>Open Fashion | Products</title>
			</Head>
			<AdminLayout>
				<Content>
					<Heading>Add new product</Heading>
					<ProductForm></ProductForm>
				</Content>
			</AdminLayout>
		</>
	);
}
