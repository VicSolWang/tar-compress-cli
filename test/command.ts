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
  'Test the full pack command.',
  async (t) => {
    await rm('-rf', 'output');
    const result = await exec(`${packCommand} test -t output/test.tgz`);
    t.falsy(result.stderr);
    t.true(await fs.pathExists('output/test.tgz'));
  },
);

test.serial(
  'Test the full unpack command.',
  async (t) => {
    // Don't specify output directory
    const result1 = await exec(`${unpackCommand} output/test.tgz -t`);
    t.falsy(result1.stderr);
    t.true(await fs.pathExists('output/test'));
    // Specify output directory
    const result2 = await exec(
      `${unpackCommand} output/test.tgz -t output/output`,
    );
    t.falsy(result2.stderr);
    t.true(await fs.pathExists('output/output/test'));
  },
);

test(
  'Test the bug command.',
  async (t) => {
    const result1 = await exec(packCommand);
    t.truthy(result1.stderr);
    const result2 = await exec(`${packCommand} output/build`);
    t.truthy(result2.stderr);
    const result3 = await exec(unpackCommand);
    t.truthy(result3.stderr);
    const result4 = await exec(`${unpackCommand} output/build`);
    t.truthy(result4.stderr);
  },
);
