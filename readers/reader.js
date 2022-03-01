const fsPromises = require('fs').promises;

const readFiles = (path) => fsPromises.readFile(path, { encoding: 'utf-8' });

module.exports = readFiles;
