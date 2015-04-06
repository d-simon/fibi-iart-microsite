/*
** env.js
*********
** Sets basic vars for the environment.
** Example:
** $ gulp <command> --deploy <envname from types>
*/


//** Dependencies **//
var gutil     = require('gulp-util');
var gulpif    = require('gulp-if');


//** Options **//
//


//** Task **//


//** Main **//
var envName;
var envTypes = {
    BUILD: 'build',
    DIST: 'dist'
}

if(gutil.env.deploy === envTypes.DIST) {
    envName = envTypes.DIST;
} else {
    envName = envTypes.BUILD;
}


//** Export **//
module.exports = function(err) {
    return {
        types: envTypes,
        name: envName
    }
};