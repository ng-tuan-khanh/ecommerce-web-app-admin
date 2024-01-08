import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function ProductForm({
	_id,
	productName: _productName,
	collectionName: _collectionName,
	price: _price,
	materials: _materials,
	careDescription: _careDescription,
}) {
	const router = useRouter();
	const [productName, setProductName] = useState(_productName || '');
	const [collectionName, setCollectionName] = useState(_collectionName || '');
	const [price, setPrice] = useState(_price || 0);
	const [materials, setMaterials] = useState(_materials || '');
	const [careDescription, setCareDescription] = useState(
		_careDescription || ''
	);
	function saveProduct(ev) {
		ev.preventDefault();
		const data = {
			productName,
			collectionName,
			price,
			materials,
			careDescription,
		};
		if (_id) {
			axios.put('/api/products/' + _id, { _id, ...data });
		} else {
			axios.post('/api/products', data);
		}
		router.replace('/products');
	}
	return (
		<form className="flex flex-col gap-4" onSubmit={saveProduct}>
			<label className="flex flex-col gap-1">
				Product name
				<input
					type="text"
					value={productName}
					onChange={(ev) => setProductName(ev.target.value)}
				></input>
			</label>
			<label className="flex flex-col gap-1">
				Collection name
				<input
					type="text"
					value={collectionName}
					onChange={(ev) => setCollectionName(ev.target.value)}
				></input>
			</label>
			<label className="flex flex-col gap-1">
				Price (in USD)
				<input
					type="number"
					value={price}
					onChange={(ev) => setPrice(ev.target.value)}
				></input>
			</label>
			<label className="flex flex-col gap-1">
				Materials
				<input
					type="text"
					value={materials}
					onChange={(ev) => setMaterials(ev.target.value)}
				></input>
			</label>
			<label className="flex flex-col gap-1">
				Care description
				<input
					type="text"
					value={careDescription}
					onChange={(ev) => setCareDescription(ev.target.value)}
				></input>
			</label>
			<button
				type="submit"
				className="btn-primary mt-4 w-24 h-10 flex-none"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
					/>
				</svg>
				Save
			</button>
		</form>
	);
}
