import { headers } from '@/next.config';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function ProductForm({
	_id,
	productName: _productName,
	collectionName: _collectionName,
	price: _price,
	images: _images,
	materials: _materials,
	careDescription: _careDescription,
}) {
	const router = useRouter();
	const [productName, setProductName] = useState(_productName || '');
	const [collectionName, setCollectionName] = useState(_collectionName || '');
	const [price, setPrice] = useState(_price || 0);
	const [images, setImages] = useState(_images || []);
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
			images,
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
	async function uploadImages(ev) {
		const files = ev.target?.files;
		if (files?.length > 0) {
			let formData = new FormData();
			for (const file of files) {
				formData.append('file', file);
			}
			const res = await axios.post('/api/upload', formData);
			setImages((oldImages) => {
				const newImages = [...oldImages, ...res.data.links];
				return newImages;
			});
		}
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
			<div className="flex flex-col gap-1">
				Images
				<div className="flex flex-wrap gap-2">
					{!!images.length &&
						images.map((image) => (
							<div className="flex-none h-40 rounded-md">
								<img src={image} className="max-h-full"></img>
							</div>
						))}
					<label className="flex-none w-32 h-40 flex flex-col justify-center items-center bg-neutral-300 rounded-md cursor-pointer">
						Upload
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
								d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
							/>
						</svg>
						<input
							type="file"
							className="hidden"
							onChange={uploadImages}
							multiple
						></input>
					</label>
				</div>
			</div>
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
