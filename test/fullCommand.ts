/**
 * Created by VICSOLWANG.
 * Date: 2022/1/1 0:42
 * Email: vic.sol.wang@gmail.com
 */

import fs from 'fs-extra';
import { exec } from 'shelljs';
import test from 'ava';

const packCommand: string = 'npx ts-node src/index.ts pack -s';
const unpackCommand: string = 'npx ts-node src/index.ts unpack -s';

test('Test the full command.', async (t) => {
  const result1 = await exec(`${packCommand} test -t output/test.tgz`);
  t.falsy(result1.stderr);
  // Don't specify output directory
  const result2 = await exec(`${unpackCommand} output/test.tgz -t`);
  t.falsy(result2.stderr);
  t.true(await fs.pathExists('output/test'));
  // Specify output directory
  const result3 = await exec(
    `${unpackCommand} output/test.tgz -t output/output`,
  );
  t.falsy(result3.stderr);
  t.true(await fs.pathExists('output/output/test'));
});
