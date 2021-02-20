const { spawn, exec } = require('child_process');

const spawnCommand = (...args) => {
  return new Promise((resolve, reject) => {
    const childProcess = spawn(...args);
    childProcess.stdout.pipe(process.stdout)
  })
}
