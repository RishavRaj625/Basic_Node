const loadsh = require('lodash');

const names = ['rishabh', 'rohn', 'Doe', 'Jane'];
const captalizeName = loadsh.map(names, loadsh.capitalize);
console.log(captalizeName);

