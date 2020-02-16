/**
 * Created by VicSolWang.
 * Date: 2019-03-12 15:40
 * Email: vic.sol.wang@gmail.com
 */

const fs = require('fs-extra');
const path = require('path');
const tar = require('tar');

const command = 'unpack';

module.exports = {
	command,
	desc: 'Unpack the specified file',
	builder: (yargs) =>
		yargs
			.options({
				source: {
					alias: 's',
					describe: 'Set source file',
					demand: true,
					type: 'string',
				},
				extractFile: {
					alias: 'e',
					describe: 'Set extract file list in the source file',
					default: [],
					type: 'array',
				},
				target: {
					alias: 't',
					describe: 'Set target directory',
					type: 'string',
				},
			})
			.usage(`Usage: $0 ${command} [options]`)
			.example(
				`$0 ${command} -s source.tgz -e extract_1 extract_2 -t target`,
			)
			.help()
			.alias('help', 'h'),
	handler: (argv) => {
		const sourceFile = argv.source;
		if (!fs.pathExistsSync(sourceFile)) {
			console.error('No such file or directory.');
			process.exit(1);
		} else {
			const extractFiles = argv.extractFile;
			let targetDirectory;
			if (!argv.target) {
				targetDirectory = path.dirname(path.resolve(sourceFile));
			} else {
				fs.ensureDirSync(argv.target);
				targetDirectory = path.resolve(argv.target);
			}
			tar.x(
				{
					file: sourceFile,
					cwd: targetDirectory,
				},
				extractFiles,
			);
		}
	},
};
