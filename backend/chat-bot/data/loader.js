const fs = require('fs');
const path = require('path');

module.exports = {
  riidlFacts: JSON.parse(fs.readFileSync(path.join(__dirname, 'riidlFacts.json'), 'utf-8')),
  bioriidlFacts: JSON.parse(fs.readFileSync(path.join(__dirname, 'bioriidlFacts.json'), 'utf-8')),
  config: JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json'), 'utf-8'))
};
