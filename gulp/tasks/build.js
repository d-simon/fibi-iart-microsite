/*
** build.js
***********
** Rebuilding the whole app.
*/
module.exports = function(gulp, $, config, util) {
    //** Options **//
    //


    //** Dependencies **//
    var runSequence = require('run-sequence');


    //** Task **//
    gulp.task('build', function(cb){
        runSequence(
            ['clean:env'],
            ['sass', 'webpack', 'images', 'icons', 'copy'],
            ['inject'],
        cb);
    });


    //** Main **//
    //
}