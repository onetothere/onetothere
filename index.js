#!/usr/bin/env node

const program = require('commander');
const helpOptions = require('./lib/core/help')

program.version(require('./package.json').version);

// 给 -h 添加其他选项
helpOptions();

// 创建命令

console.log('my onetothere!');

// 解析终端指令
program.parse(process.argv);

