/**
 * Created by VICSOLWANG.
 * Date: 2021/12/30 19:16
 * Email: vic.sol.wang@gmail.com
 */

import fs from 'fs-extra';
import path from 'path';
import tar from 'tar';
import { CommandModule } from 'yargs';
import {
  isEmptyValue,
  arrayUnique,
  getFileName,
  getExistFiles,
} from '../utils/index';

const commandName: string = getFileName(__filename, __dirname);

const command: CommandModule = {
  command: commandName,
  describe: 'Unpack the specified file',
  builder: (yargs) =>
    yargs
      .options({
        source: {
          alias: 's',
          describe: 'Set source file',
          demandOption: true,
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
      .usage(`Usage: $0 ${commandName} [options]`)
      .example(
        `$0 ${commandName} -s source.tgz -e extract_1 extract_2 -t target`,
        '',
      )
      .help()
      .alias('help', 'h'),
  handler: async (argv) => {
    try {
      if (isEmptyValue(argv.source)) {
        throw new Error('Please enter the file path.');
      }
      const sourceFileArray: string[] = await getExistFiles(
        String(argv.source),
      );
      if (isEmptyValue(sourceFileArray)) {
        throw new Error('No such file or directory.');
      }
      const extractFiles: string[] = arrayUnique(argv.extractFile);
      let targetDirectory: string;
      if (isEmptyValue(String(argv.target))) {
        targetDirectory = path.dirname(path.resolve(sourceFileArray[0]));
      } else {
        await fs.ensureDir(String(argv.target));
        targetDirectory = path.resolve(String(argv.target));
      }
      tar.x({ file: sourceFileArray[0], cwd: targetDirectory }, extractFiles);
    } catch (err) {
      console.error(Object(err).message);
      process.exit(1);
    }
  },
};

export = command;
