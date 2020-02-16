/**
 * Created by VicSolWang.
 * Date: 2019-03-12 14:43
 * Email: vic.sol.wang@gmail.com
 */

const fs = require('fs-extra');
const path = require('path');
const tar = require('tar');

const command = 'pack';

module.exports = {
	command,
	desc: 'Pack the specified file',
	builder: (yargs) =>
		yargs
			.options({
				source: {
					alias: 's',
					describe: 'Set source file list',
					demand: true,
					type: 'array',
				},
				target: {
					alias: 't',
					describe: 'Set target file',
					default: 'output.tgz',
					type: 'string',
				},
			})
			.usage(`Usage: $0 ${command} [options]`)
			.example(`$0 ${command} -s source_1 source_2 -t target.tgz`)
			.help()
			.alias('help', 'h'),
	handler: (argv) => {
		const sourceFiles = argv.source.filter((item) =>
			fs.pathExistsSync(item),
		);
		if (sourceFiles.length === 0) {
			console.error('No such file or directory.');
			process.exit(1);
		} else {
			const targetFile = argv.target;
			fs.ensureDir(path.dirname(targetFile), (err) => {
				if (err) {
					console.error('Creat directory failed.');
					process.exit(1);
				} else {
					tar.c(
						{
							gzip: true,
							file: targetFile,
						},
						sourceFiles,
					);
				}
			});
		}
	},
};
