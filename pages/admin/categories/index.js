import Content from '@/components/Content';
import AdminLayout from '@/components/helpers/AdminLayout';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

Categories.auth = true;

export default function Categories() {
	const [categories, setCategories] = useState([]);
	const [editedCategory, setEditedCategory] = useState(null);
	const [name, setName] = useState('');
	const [parentId, setParentId] = useState(null);
	const [deletedCount, setDeletedCount] = useState(0);
	useEffect(() => {
		axios.get('/api/categories').then((response) => {
			setCategories(response.data);
		});
	}, [deletedCount]);
	async function saveCategory(ev) {
		ev.preventDefault();
		const data = {
			name,
			parent: parentId,
		};
		if (!editedCategory) {
			await axios.post('/api/categories', data);
		} else {
			await axios.put(`/api/categories/${editedCategory._id}`, data);
		}

		setEditedCategory(null);
		setName('');
		setParentId(null);
		setDeletedCount((cnt) => cnt + 1);
	}
	async function deleteCategory(_id) {
		await axios.delete('/api/categories/' + _id);
		setDeletedCount((cnt) => cnt + 1);
	}
	function editCategory(category) {
		setEditedCategory(category);
		setName(category.name);
		setParentId(category.parent?._id || '');
	}
	return (
		<AdminLayout>
			<Content>
				<h2 className="text-xl font-semibold mb-6">Categories</h2>
				<form className="mb-6" onSubmit={saveCategory}>
					<label className="block mb-1">
						{editedCategory ? (
							<>
								<span>Edit </span>
								<span>{editedCategory.name}</span>
							</>
						) : (
							'New category name'
						)}
					</label>
					<div className="flex-grow flex gap-2">
						<input
							className="flex-grow"
							type="text"
							value={name}
							onChange={(ev) => setName(ev.target.value)}
						></input>
						<select
							className="flex-grow"
							value={parentId}
							onChange={(ev) => setParentId(ev.target.value)}
						>
							<option value="">No parent category</option>
							{categories.map((category) => (
								<option key={category._id} value={category._id}>
									{category.name}
								</option>
							))}
						</select>
						<button
							type="submit"
							className="btn-primary w-24 h-10 flex-none"
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
					</div>
				</form>
				<table className="table-basic w-full">
					<thead>
						<tr>
							<td className="w-1/2">Category name</td>
							<td className="w-1/2">Parent category</td>
							<td className="w-52">Options</td>
						</tr>
					</thead>
					<tbody>
						{categories.map((category) => (
							<tr key={category._id}>
								<td>{category.name}</td>
								<td>{category.parent?.name}</td>
								<td>
									<div className="flex gap-1">
										<button
											className="btn-primary"
											onClick={() => {
												editCategory(category);
											}}
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
													d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
												/>
											</svg>
											<span>Edit</span>
										</button>
										<button
											onClick={() =>
												deleteCategory(category._id)
											}
											className="btn-danger"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke-width="1.5"
												stroke="currentColor"
												class="w-6 h-6"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
												/>
											</svg>
											<span>Delete</span>
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</Content>
		</AdminLayout>
	);
}
