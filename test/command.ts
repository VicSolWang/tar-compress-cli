/**
 * Created by VICSOLWANG.
 * Date: 2021-02-16 0:42
 * Email: vic.sol.wang@gmail.com
 */

import fs from 'fs-extra';
import { rm, exec } from 'shelljs';
import test from 'ava';

const packCommand: string = 'npx ts-node src/index.ts pack -s';
const unpackCommand: string = 'npx ts-node src/index.ts unpack -s';

test.serial(
  'Execute packing command to validate the result is correct.',
  async (t) => {
    await rm('-rf', 'output');
    const test1 = await exec(packCommand);
    t.truthy(test1.stderr);
    const test2 = await exec(`${packCommand} output`);
    t.truthy(test2.stderr);
    const test3 = await exec(`${packCommand} test -t output/test.tgz`);
    t.falsy(test3.stderr);
    t.true(await fs.pathExists('output/test.tgz'));
  },
);

test.serial(
  'Execute unpacking command to validate the result is correct.',
  async (t) => {
    const test1 = await exec(unpackCommand);
    t.truthy(test1.stderr);
    const test2 = await exec(`${unpackCommand} output/test`);
    t.truthy(test2.stderr);
    const test3 = await exec(`${unpackCommand} output/test.tgz -t`);
    t.falsy(test3.stderr);
    t.true(await fs.pathExists('output/test'));
    const test4 = await exec(
      `${unpackCommand} output/test.tgz -t output/output`,
    );
    t.falsy(test4.stderr);
    t.true(await fs.pathExists('output/output/test'));
    await rm('-rf', 'output');
  },
);
