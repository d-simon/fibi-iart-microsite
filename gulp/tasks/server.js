/*
** server.js
************
** Server start task.
*/
module.exports = function(gulp, $, config, util) {
    //** Options **//
    //


    //** Dependencies **//
    var browserSync  = require('browser-sync');
    var childProcess = require('child_process');


    //** Task **//
    gulp.task('server:node', ['build'], function(){
        browserSync(config.sync.server);
        gulp.start('watch');

        $.gutil.log($.gutil.colors.green("Started browsersync server."));
    });


    //** Main **//
    //
}
