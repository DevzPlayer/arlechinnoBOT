const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const package = require('./package.json');
const CFonts = require('cfonts');

CFonts.say('ARLECHINNO BOT', {
  colors: ['#ff33cc'],
  font: 'block',
  align: 'center'
});

CFonts.say(`'${package.name}' Oleh @${package.author.name || package.author}`, {
  colors: ['#ff33cc'],
  font: '3d',
  align: 'center'
});

let isRunning = false;

function start(scriptName) {
  if (isRunning) return;
  isRunning = true;

  let commandArgs = [path.join(__dirname, scriptName), ...process.argv.slice(2)];
  CFonts.say([process.argv[0], ...commandArgs].join(' '), {
    colors: ['#f2aa4c'],
    font: '3d',
    align: 'center'
  });

  let processInstance = spawn(process.argv[0], commandArgs, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc']
  });

  processInstance.on('exit', (exitCode) => {
    console.log('Exited with code:', exitCode);
    if (exitCode === 0) {
      processInstance.kill();
      isRunning = false;
      start.apply(this, arguments);
    } else {
      fs.watchFile(commandArgs[0], () => {
        fs.unwatchFile(commandArgs[0]);
        start(scriptName);
      });
    }
  });

  processInstance.on('error', (error) => {
    isRunning = false;
    console.error('Error:', error);
    if (error === 0) {
      fs.watchFile(commandArgs[0], () => {
        fs.unwatchFile(commandArgs[0]);
        start(scriptName);
      });
    }
  });
}

start('main.js');