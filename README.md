# tar-compress-cli

[![NPM version](https://img.shields.io/npm/v/tar-compress-cli)](https://www.npmjs.com/package/tar-compress-cli)
[![Build Status](https://travis-ci.com/VicSolWang/tar-compress-cli.svg?branch=master)](https://travis-ci.com/VicSolWang/tar-compress-cli)
[![codecov](https://codecov.io/gh/VicSolWang/tar-compress-cli/branch/master/graph/badge.svg)](https://codecov.io/gh/VicSolWang/tar-compress-cli)
[![NPM downloads](https://img.shields.io/npm/dt/tar-compress-cli)](https://www.npmjs.com/package/tar-compress-cli)

Use tar to pack and unpack file

# Installation

    npm install --save-dev tar-compress-cli

# Usage

    tar-compress-cli <pack|unpack> [options]

## Pack Command options


    -s, --source         Set source file list                        [array] [required]
    -t, --target         Set target file                             [string] [default: "output.tgz"]
    -v, --version        Show version number
    -h, --help           Show help

### Example

    tar-compress-cli pack -s source_1 source_2 -t target.tgz

## Unpack Command options

    -s, --source         Set source file                             [string] [required]
    -e, --extractFile    Set extract file list in the source file    [array] [default: []]
    -t, --target         Set target file                             [string]
    -v, --version        Show version number
    -h, --help           Show help


### Example

    tar-compress-cli unpack -s source.tgz -e extract_1 extract_2  -t target


# License

[MIT](LICENSE).
