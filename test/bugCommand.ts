/**
 * Created by VICSOLWANG.
 * Date: 2022/1/3 23:02
 * Email: vic.sol.wang@gmail.com
 */

import { exec } from 'shelljs';
import test from 'ava';

const packCommand: string = 'npx ts-node src/index.ts pack -s';
const unpackCommand: string = 'npx ts-node src/index.ts unpack -s';

test('Test the bug command.', async (t) => {
  const result1 = await exec(packCommand);
  t.truthy(result1.stderr);
  const result2 = await exec(`${packCommand} output/build`);
  t.truthy(result2.stderr);
  const result3 = await exec(unpackCommand);
  t.truthy(result3.stderr);
  const result4 = await exec(`${unpackCommand} output/build`);
  t.truthy(result4.stderr);
});
