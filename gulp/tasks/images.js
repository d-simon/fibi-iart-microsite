/*
** images.js
************
** Tasks to do image optimisation on source files.
*/
module.exports = function(gulp, $, config, util) {
    //** Options **//
    //


    //** Dependencies **//
    var browserSync = require('browser-sync');
    var extend = require('extend');
    var pngquant = require('imagemin-pngquant');


    //** Task **//
    gulp.task('images', [], function(){
        var env = util.env();

        return gulp.src(config.images.src.path + '/**/*.{gif,png,jpg,jpeg,svg}')
            // Report errors and keep watching
            .pipe( $.plumber({ errorHandler: util.error }) )
            // Watch for unchanged files
            .pipe( $.changed(config.images[env.name].path) )
            // Otimize images
            .pipe( $.imagemin(
                    extend(true, {},
                        config.images.options,
                        { use: [pngquant()] }
                    )
                )
            )
            // Write stream
            .pipe( gulp.dest(config.images[env.name].path) )
            // Inform about filesize
            .pipe( $.size({ showFiles: true }) )
            // update browser
            .pipe( browserSync.reload({ stream: true }) );
    });


    //** Main **//
    //
}