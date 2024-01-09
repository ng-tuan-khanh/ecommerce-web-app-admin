import multiparty from 'multiparty';

export default function handle(req, res) {
	const form = new multiparty.Form();

	form.parse(req, function (err, fields, files) {
		console.log(files);
	});

	res.json(true);
}

export const config = {
	api: { bodyParser: false },
};
