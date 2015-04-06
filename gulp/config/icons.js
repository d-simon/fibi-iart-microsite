/*
** icons.js
***********
** Icons Task Config file.
*/


//** Options **//
var paths = require('./paths.js');
var extend = require('extend');


//** Dependencies **//
var path = require('path');


//** Main **//
//


//** Export **//
module.exports = {
    plugins: {
        svgSprite: {
            mode: {
                symbol: true
            }
        },
        imagemin: {
            svgoPlugins: [{
                removeUselessStrokeAndFill: true
            }]
        }
    },
    src: {
        path: path.join(paths.src, 'icons'),
        files: [
            path.join(paths.src, '/icons/**/*.svg')
        ]
    },
    build: {
        path: path.join(paths.build, 'icons'),
        filename: 'symbols.svg'
    },
    dist: {
        path: path.join(paths.dist, 'icons'),
        filename: 'symbols.svg'
    }
}