let net = require('net');

export interface INerOptions {
    host: string;
    port: number;
}

export interface EntityMap {
	[entity: string]: string[];
}

export interface INerResult {
    parsed: any;   // TODO: pongase el tipo adecuado
	entities: EntityMap;
	raw: string;
}



export function getNerResponse(opts: INerOptions, text: string, callback: (err: Error, result: INerResult) => void) {
	var socket = new net.Socket();

	socket.connect(opts.port, opts.host, () => {
		socket.setNoDelay(true);
		socket.write(text.replace(/\r?\n|\r|\t/g, ' ') + '\n');
	});

	socket.on('data', (data: any) => {
		let re = /<([A-Z]+?)>(.+?)<\/\1>/g;
		let str: string = data.toString();
		console.log('ner_get_string');
		console.log(str);
		let res: INerResult = {
			'raw': '',
			'parsed': [],
			'entities': null
		};
		console.log(res);
		res.raw = str;

		let m;
		let entities: EntityMap = {};

		let parsed = [];
		while ((m = re.exec(str)) !== null) {
			if (m.index === re.lastIndex) {
				re.lastIndex++;
			}
			parsed.push(m);

			entities[m[1]] = entities[m[1]] ? entities[m[1]] : [];
			entities[m[1]].push(m[2]);
		}

		res.parsed = parsed;
		res.entities = entities;
		console.log('res0');
		console.log(res);
		socket.destroy();
		callback(undefined, res);
	});

	socket.on('error', (err) => {
		callback(err, undefined);
	});
}
