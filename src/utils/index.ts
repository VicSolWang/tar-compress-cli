/**
 * Created by VICSOLWANG.
 * Date: 2021/12/30 10:24
 * Email: vic.sol.wang@gmail.com
 */

import fs from 'fs-extra';

const getDataType = (value: any): string =>
  Object.prototype.toString.call(value).slice(8, -1);

const isEmptyValue = (value: any): boolean => {
  switch (getDataType(value)) {
    case 'String':
      return !value.trim();
    case 'Array':
      return !value.length;
    case 'Object':
      return !Object.keys(value).length;
    case 'Null':
    case 'Undefined':
      return true;
    default:
      return false;
  }
};

const getFileName = (filePath: string, dirPath: string): string => {
  const fileName = filePath.slice(dirPath.length + 1);
  return fileName.slice(0, fileName.lastIndexOf('.'));
};

const getExistFiles = async (files: string | string[]): Promise<string[]> => {
  const fileArray: string[] = Array.isArray(files) ? files : [files];
  const handleFileArray: string[] = await Promise.all(
    fileArray.map(async (item) => {
      const result = await fs.pathExists(item);
      return result ? item : '';
    }),
  );
  return handleFileArray.filter((item) => !isEmptyValue(item));
};

export { getDataType, isEmptyValue, getFileName, getExistFiles };
