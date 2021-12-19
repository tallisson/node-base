const { getFlag } = require('./flag');

console.log(`${getFlag('--name')} has ${getFlag('--age')} years old.`);