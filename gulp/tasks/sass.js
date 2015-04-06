/*
** sass.js
**********
** Controls sass stream for development
*/
module.exports = function(gulp, $, config, util) {
    //** Options **//
    //


    //** Dependencies **//
    var browserSync = require('browser-sync');


    //** Task **//
    gulp.task('sass', [], function(){
        var env = util.env();
        var hasError = false;

        return gulp.src(config.sass.src.files)
            // Report errors and keep watching
            .pipe( $.plumber({ errorHandler: util.error }) )
            // Initialize sourcemaps
            .pipe( $.gulpif( env.name === env.types.BUILD,
                $.sourcemaps.init(),
                $.gutil.noop())
            )
            // Compile sass
            .pipe( $.sass({
                onError: function(err){
                    // borrowed from gulp-less
                    err.lineNumber = err.line;
                    err.fileName = err.file;

                    hasError = true;
                    util.error(err, 'gulp-sass');
                }
            }) )
            // User Autoprefixer to prefix all needed properties
            .pipe( $.autoprefixer(config.sass.plugins.autoprefixer) )
            // Concat files
            .pipe( $.gulpif( env.name === env.types.DIST,
                $.concat('dist.css'),
                $.gutil.noop())
            )
            // Minify css
            .pipe( $.gulpif( env.name === env.types.DIST,
                $.minify(),
                $.gutil.noop())
            )
            // Generate sourcemap
            .pipe( $.gulpif( env.name === env.types.BUILD,
                $.sourcemaps.write('.', config.sass.plugins.sourcemaps),
                $.gutil.noop())
            )
            // Write stream
            .pipe( gulp.dest(config.sass[env.name].path) )
            // Filter *.map files
            .pipe( $.filter(['*.css']) )
            // Inform about filesize
            .pipe( $.size({ showFiles: true }) )
            // Update browser
            .pipe( $.gulpif( function(){ return hasError; },
                    $.gutil.noop(),
                    browserSync.reload({ stream: true })
                )
            );
    });


    //** Main **//
    //
}