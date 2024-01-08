import Layout from '@/components/Layout';
import ProductForm from '@/components/ProductForm';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export default function EditProduct() {
	const [product, setProduct] = useState(null);

	const router = useRouter();
	const id = router.query.id;
	useEffect(() => {
		axios
			.get('/api/products/' + id)
			.then((response) => setProduct(response.data));
	}, id);
	return (
		<Layout>
			<div className="m-6">
				<h2 className="text-xl font-semibold mb-6">Edit product</h2>
				{product && <ProductForm {...product}></ProductForm>}
			</div>
		</Layout>
	);
}
