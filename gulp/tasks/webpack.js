/*
** webpack.js
*************
** Webpack config file
*/
module.exports = function(gulp, $, config, util) {
    //** Options **//
    //


    //** Dependencies **//
    var Webpack = require('webpack');
    var browserSync = require('browser-sync');
    var named = require('vinyl-named');


    //** Task **//
    gulp.task('webpack', function(cb){
        var env = util.env();
        var hasError = false;

        return gulp.src(config.js.src.files)
            // Report errors and keep watching
            .pipe( $.plumber({ errorHandler: util.error }) )
            // Transform src into named output streams for webpack
            .pipe( named() )
            // Webpack main magic
            .pipe( $.webpack(config.webpack, Webpack, function(err, stats) {
                // Log webpack errors to browserSync
                if(stats.compilation.errors.length === 0) { return; }
                else { hasError = true; }
                util.error(stats.compilation.errors[0], 'gulp-webpack');
            }))
            // Write stream (only if no error occured)
            .pipe( $.gulpif( function(){ return hasError; },
                    $.gutil.noop(),
                    gulp.dest(config.js[env.name].path)
                )
            )
            // Update browser (only if no error occured)
            .pipe( $.gulpif( function(){ return hasError; },
                    $.gutil.noop(),
                    browserSync.reload({ stream: true })
                )
            );
    });


    //** Main **//
    //
}