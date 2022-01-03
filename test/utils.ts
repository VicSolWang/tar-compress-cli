/**
 * Created by VICSOLWANG.
 * Date: 2022/1/1 10:48
 * Email: vic.sol.wang@gmail.com
 */

import test from 'ava';
import {
  getDataType,
  isEmptyValue,
  arrayUnique,
  getFileName,
  getExistFiles,
} from '../src/utils/index';

test('Test the function named "getDataType".', (t) => {
  t.is(getDataType('abc'), 'String');
});

test('Test the function named "isEmptyValue".', (t) => {
  t.true(isEmptyValue(''));
  t.true(isEmptyValue([]));
  t.true(isEmptyValue({}));
  t.true(isEmptyValue(null));
  t.true(isEmptyValue(undefined));
  t.false(isEmptyValue(0));
});

test('Test the function named "arrayUnique".', (t) => {
  const array1 = arrayUnique('abc');
  t.true(Array.isArray(array1) && array1.length === 0);
  const array2 = arrayUnique(['abc', 'abc']);
  t.true(Array.isArray(array2) && array2.length === 1);
});

test('Test the function named "getFileName".', (t) => {
  t.is(getFileName(__filename, __dirname), 'utils');
});

test('Test the function named "getExistFiles".', async (t) => {
  const fileArray: string[] = await getExistFiles(__filename);
  t.false(isEmptyValue(fileArray));
});
