dumpcord
========

Discord dumping

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/dumpcord.svg)](https://npmjs.org/package/dumpcord)
[![Downloads/week](https://img.shields.io/npm/dw/dumpcord.svg)](https://npmjs.org/package/dumpcord)
[![License](https://img.shields.io/npm/l/dumpcord.svg)](https://github.com/willyb321/dumpcord/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g dumpcord
$ dumpcord COMMAND
running command...
$ dumpcord (-v|--version|version)
dumpcord/0.0.0 darwin-x64 node-v8.11.4
$ dumpcord --help [COMMAND]
USAGE
  $ dumpcord COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`dumpcord hello [FILE]`](#dumpcord-hello-file)
* [`dumpcord help [COMMAND]`](#dumpcord-help-command)

## `dumpcord hello [FILE]`

describe the command here

```
USAGE
  $ dumpcord hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ dumpcord hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/willyb321/dumpcord/blob/v0.0.0/src/commands/hello.ts)_

## `dumpcord help [COMMAND]`

display help for dumpcord

```
USAGE
  $ dumpcord help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.3/src/commands/help.ts)_
<!-- commandsstop -->
