/*
** copy.js
**********
** Copying miscellaneous folders for build and dist.
*/
module.exports = function(gulp, $, config, util) {
    //** Options **//
    //


    //** Dependencies **//
    //


    //** Task **//
    gulp.task('copy', [], function(){
        var env = util.env();

        return gulp.src(config.copy.src.folders,
                { cwd: (config.copy.src.path + '/**')
            })
            .pipe( gulp.dest(config.copy[env.name].path) );
    });


    //** Main **//
    //
}