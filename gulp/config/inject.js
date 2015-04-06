/*
** inject.js
************
** Inject config file.
*/


//** Options **//
//


//** Dependencies **//
var requireDir = require('require-dir');
var util = requireDir('../util');
var gutil = require('gulp-util');


//** Main **//
var env = util.env();

var injectOpt = {};
injectOpt.envRegex = new RegExp(env.name+'\/', 'g');


//** Export **//
module.exports = {
    general: {
        options: {
            addRootSlash: false,
            starttag: '<!-- inject:{{name}}:{{ext}} -->',
            endtag: '<!-- endinject:{{name}}:{{ext}} -->'
        }
    },
    head: {
        options: {
            name: 'head',
            transform: function(filePath, file, i, length) {
                var newPath = filePath.replace(injectOpt.envRegex, '');
                var tpl = "<link rel=\"stylesheet\" href=\"" + newPath + "\"/>";
                return tpl;
            }
        }
    },
    body: {
        options: {
            name: 'body',
            transform: function(filePath, file, i, length) {
                var newPath = filePath.replace(injectOpt.envRegex, '');
                var tpl = "<script type=\"text/javascript\" src=\"" + newPath + "\"></script>";
                return tpl;
            }
        }
    }
}