import { read, readFileSync } from 'fs';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import multiparty from 'multiparty';
import { lookup } from 'mime-types';
const bucketName = 'ecommerce-web-app-ng-tuan-khanh';

export default async function handle(req, res) {
	const form = new multiparty.Form();

	const parseFormPromise = new Promise((resolve, reject) =>
		form.parse(req, function (err, fields, files) {
			if (err) reject(err);
			resolve({ fields, files });
		})
	);

	const { files } = await parseFormPromise;

	const client = new S3Client({
		region: 'ap-southeast-2',
		credentials: {
			accessKeyId: process.env.S3_ACCESS_KEY,
			secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
		},
	});

	const links = [];
	for (const file of files.file) {
		const ext = file.originalFilename.split('.').pop();
		const newFilename = Date.now() + '.' + ext;
		await client.send(
			new PutObjectCommand({
				Bucket: bucketName,
				Key: newFilename,
				Body: readFileSync(file.path),
				ACL: 'public-read',
				ContentType: lookup(file.path),
			})
		);
		const link = `https://${bucketName}.s3.amazonaws.com/${newFilename}`;
		links.push(link);
	}
	res.json({ links });
}

export const config = {
	api: { bodyParser: false },
};
