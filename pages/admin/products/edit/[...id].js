import Content from '@/components/Content';
import AdminLayout from '@/components/AdminLayout';
import ProductForm from '@/components/ProductForm';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

EditProduct.auth = true;
EditProduct.role = 'employee';

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
		<AdminLayout>
			<Content>
				<h2 className="text-xl font-semibold mb-6">Edit product</h2>
				{product && <ProductForm {...product}></ProductForm>}
			</Content>
		</AdminLayout>
	);
}
