const Configstore = require('configstore');
const pkg = require('../package.json');

export const conf = new Configstore(pkg.name, {token: ''});
