/*
** less.js
**********
** Controls less stream for development
*/
module.exports = function(gulp, $, config, util) {
    //** Options **//
    //


    //** Dependencies **//
    var browserSync = require('browser-sync');


    //** Task **//
    gulp.task('less', [], function(){
        var env = util.env();

        return gulp.src(config.less.src.files)
            // Report errors and keep watching
            .pipe( $.plumber({ errorHandler: util.error }) )
            // Initialize sourcemaps
            .pipe( $.gulpif( env.name === env.types.BUILD,
                $.sourcemaps.init(),
                $.gutil.noop())
            )
            // Compile less
            .pipe( $.less() )
            // User Autoprefixer to prefix all needed properties
            .pipe( $.autoprefixer(config.less.plugins.autoprefixer) )
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
                $.sourcemaps.write('.', config.less.plugins.sourcemaps),
                $.gutil.noop())
            )
            // Write stream
            .pipe( gulp.dest(config.less[env.name].path) )
            // Filter *.map files
            .pipe( $.filter(['*.css']) )
            // Inform about filesize
            .pipe( $.size({ showFiles: true }) )
            // update browser
            .pipe( browserSync.reload({ stream: true }) );
    });


    //** Main **//
    //
}