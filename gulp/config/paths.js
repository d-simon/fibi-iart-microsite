/*
** paths.js
***********
** Paths Config file.
*/


//** Options **//
//


//** Dependencies **//
var path = require('path');


//** Main **//
var paths   = {};
paths.root     = path.resolve(__dirname, '..', '..');
paths.frontend = paths.root
paths.base     = paths.root
paths.src      = path.join(paths.base, '/src');
paths.build    = path.join(paths.base, '/build');
paths.dist     = path.join(paths.base, '/dist');


//** Export **//
module.exports = paths;
