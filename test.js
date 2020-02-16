/**
 * Created by VicSolWang.
 * Date: 2020-02-16 0:42
 * Email: vic.sol.wang@gmail.com
 */

const fs = require('fs-extra');
const shell = require('shelljs');
const test = require('ava');

const cli = 'node src/index.js';
const filename = 'test';
const file = `${filename}.js`;
const directory = 'output';
const output = `${directory}/${filename}.tgz`;

test.serial(
	'Execute packing command to validate the result is correct.',
	async (t) => {
		await shell.rm('-rf', directory);
		await shell.exec(`${cli} pack -s ${file} -t ${output}`);
		t.true(fs.pathExistsSync(output));
	},
);

test.serial(
	'Execute unpacking command to validate the result is correct.',
	async (t) => {
		await shell.exec(`${cli} unpack -s ${output} -t ${directory}`);
		t.true(fs.pathExistsSync(`${directory}/${file}`));
		await shell.rm('-rf', directory);
	},
);
