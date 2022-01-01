/**
 * Created by VICSOLWANG.
 * Date: 2021/12/29 16:25
 * Email: vic.sol.wang@gmail.com
 */

import fs from 'fs-extra';
import path from 'path';
import tar from 'tar';
import { CommandModule } from 'yargs';
import { isEmptyValue, getFileName, getExistFiles } from '../utils/index';

const commandName: string = getFileName(__filename, __dirname);

const command: CommandModule = {
  command: commandName,
  describe: 'Pack the specified file',
  builder: (yargs) =>
    yargs
      .options({
        source: {
          alias: 's',
          describe: 'Set source file list',
          demandOption: true,
          type: 'array',
        },
        target: {
          alias: 't',
          describe: 'Set target file',
          default: 'output.tgz',
          type: 'string',
        },
      })
      .usage(`Usage: $0 ${commandName} [options]`)
      .example(`$0 ${commandName} -s source_1 source_2 -t target.tgz`, '')
      .help()
      .alias('help', 'h'),
  handler: async (argv) => {
    try {
      if (isEmptyValue(argv.source)) {
        throw new Error('Please enter file paths.');
      }
      const sourceFiles: string[] = await getExistFiles(
        Array.isArray(argv.source) ? argv.source : String(argv.source),
      );
      if (isEmptyValue(sourceFiles)) {
        throw new Error('No such file or directory.');
      }
      const targetFile: string = String(argv.target);
      await fs.ensureDir(path.dirname(targetFile));
      tar.c({ gzip: true, file: targetFile }, sourceFiles);
    } catch (err) {
      console.error(Object(err).message);
      process.exit(1);
    }
  },
};

export = command;
