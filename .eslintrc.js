/**
 * Created by VICSOLWANG.
 * Date: 2021/12/31 22:55
 * Email: vic.sol.wang@gmail.com
 */

module.exports = {
  extends: 'wzx',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.eslint.json',
      },
    },
  ],
};
