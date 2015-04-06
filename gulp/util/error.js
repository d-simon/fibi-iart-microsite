/*
** error.js
***********
** Small error handling util.
*/


//** Dependencies **//
var util = require('util');
var gutil = require('gulp-util');
var beep = require("beepbeep");
var browserSync = require('browser-sync');


//** Options **//
//


//** Task **//


//** Main **//
//


//** Export **//
module.exports = function(err, name) {
    var gutilError, bsError;

    if(util.isError(err)) {
        gutilError = err;
    } else {
        if(!err.plugin) { err.plugin = name; }
        gutilError = new gutil.PluginError(err, { showStack: false });
    }

    bsError = '<span style="color: red">' + err.message + '</span>';

    beep([0, 0, 0]);
    gutil.log( gutil.colors.red(gutilError) );
    browserSync.notify(bsError, 60000);
};