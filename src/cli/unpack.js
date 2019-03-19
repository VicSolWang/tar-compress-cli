/**
 * Created by VicSolWang.
 * Date: 2019-03-12 15:40
 * Email: vic.sol.wang@gmail.com
 */

const fs = require('fs-extra');
const tar = require('tar');

const command = 'unpack';

module.exports = {
	command,
	desc: 'Unpack the specified file',
	builder: yargs => yargs
		.options({
			source: {
				alias: 's',
				describe: 'Set source file',
				demand: true,
				type: 'string',
			},
			target: {
				alias: 't',
				describe: 'Set target file',
				default: [],
				type: 'array',
			},
		})
		.usage(`Usage: $0 ${command} [options]`)
		.example(`$0 ${command} -s source.tgz -t target`)
		.help()
		.alias('help', 'h'),
	handler: (argv) => {
		const sourceFile = argv.source;
		if (!fs.pathExistsSync(sourceFile)) {
			console.error('No such file or directory');
			process.exit(1);
		} else {
			const targetFiles = argv.target;
			tar.x(
				{
					file: sourceFile,
				},
				targetFiles,
			);
		}
	},
};
