// Name : Drasti Parikh
//Student Id : 101419828

const fs = require('fs');
const path = require('path');

const logsDir = path.resolve(__dirname, 'Logs');

if (fs.existsSync(logsDir)) {
  
  const logFiles = fs.readdirSync(logsDir);

 
  for (const file of logFiles) {
    const currentFilePath = path.join(logsDir, file);
    fs.unlinkSync(currentFilePath);
    console.log(`Removed file: ${file}`);
  }


  fs.rmdirSync(logsDir);
  console.log('Logs directory removed successfully.');
} else {
  console.log('No Logs directory found.');
}