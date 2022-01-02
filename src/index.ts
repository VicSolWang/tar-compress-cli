#! /usr/bin/env node
/**
 * Created by VICSOLWANG.
 * Date: 2021/12/29 13:52
 * Email: vic.sol.wang@gmail.com
 */

import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

yargs(hideBin(process.argv))
  .commandDir('cli', { extensions: ['js', 'ts'] })
  .demandCommand()
  .help()
  .alias({
    help: 'h',
    version: 'v',
  })
  .parse();
