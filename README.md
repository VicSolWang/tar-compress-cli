# tar-compress-cli

[![NPM version](https://img.shields.io/npm/v/tar-compress-cli?logo=npm&style=flat-square)](https://www.npmjs.com/package/tar-compress-cli)
[![node](https://img.shields.io/node/v/tar-compress-cli?logo=nodedotjs&style=flat-square)](https://nodejs.org)
[![Code Style](https://img.shields.io/badge/code%20style-prettier-ff69b4?logo=prettier&style=flat-square)](https://prettier.io)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/VicSolWang/tar-compress-cli/test-release-ci/master?logo=github&style=flat-square)](https://github.com/VicSolWang/tar-compress-cli/actions/workflows/test-release.yml)
[![release](https://img.shields.io/badge/release-semantic--release-e10079?logo=semantic-release&style=flat-square)](https://github.com/semantic-release/semantic-release)
[![codecov](https://img.shields.io/codecov/c/gh/VicSolWang/tar-compress-cli/master?label=codecov&logo=codecov&style=flat-square)](https://codecov.io/gh/VicSolWang/tar-compress-cli)
[![NPM downloads](https://img.shields.io/npm/dt/tar-compress-cli?style=flat-square)](https://www.npmjs.com/package/tar-compress-cli)

> Use tar to pack and unpack file

## :cd: Installation

    npm install --save-dev tar-compress-cli

## :rocket: Usage

    tar-compress-cli <pack|unpack> [options]

### :gear: Pack command options

    -s, --source         Set source file list                        [array] [required]
    -t, --target         Set target file                             [string] [default: "output.tgz"]
    -v, --version        Show version number
    -h, --help           Show help

### :bulb: Example

    tar-compress-cli pack -s source_1 source_2 -t target.tgz

### :gear: Unpack command options

    -s, --source         Set source file                             [string] [required]
    -e, --extractFile    Set extract file list in the source file    [array] [default: []]
    -t, --target         Set target file                             [string]
    -v, --version        Show version number
    -h, --help           Show help

### :bulb: Example

    tar-compress-cli unpack -s source.tgz -e extract_1 extract_2  -t target

## :lock: License

[MIT](LICENSE).
