const { promisify } = require('util');
const path = require('path');
const program = require('commander');

const downloadRepo = promisify(require('download-git-repo'));
const open = require('open');

const log = require('../utils/log');
const terminal = require('../utils/terminal');


const createProject = async (project, otherArg) => {
  // 1. 提示信息

}
