// Name : Drasti Parikh
//Student Id : 101419828

const fs = require('fs');
const path = require('path');

const logsDir = path.resolve(__dirname, 'Logs');


if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
  console.log('Logs directory created.');
} else {
  console.log('Logs directory already exists.');
}

process.chdir(logsDir);

for (let index = 0; index < 10; index++) {
  const logFileName = `log_${index}.txt`;
  const logContent = `Log entry for file number ${index}`;
  fs.writeFileSync(logFileName, logContent);
  console.log(`File created: ${logFileName}`);
}