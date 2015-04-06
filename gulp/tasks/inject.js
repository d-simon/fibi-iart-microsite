/*
** inject
*********
** Injects Assets into html
** Render & include partials
*/
module.exports = function(gulp, $, config, util) {
    //** Options **//
    //


    //** Dependencies **//
    var extend = require('extend');
    var browserSync = require('browser-sync');

    //** Task **//
    gulp.task('inject', ['clean:html'], function(){
        var env = util.env();
        var injectCss = [(config.less[env.name].path + '/*'), (config.sass[env.name].path + '/*')];
        var injectJs = [(config.js[env.name].path + '/*')];

        return gulp.src([config.html.src.path + '/**/*.html'])
            // Report errors and keep watching
            .pipe($.plumber({ errorHandler: util.error }))


            // Inject files into head
            .pipe($.inject(
                gulp.src(injectJs, { read: false }),
                extend(true, {},
                    config.inject.general.options,
                    config.inject.body.options)
                )
            )
            .pipe($.inject(
                gulp.src(injectCss, { read: false }),
                extend(true, {},
                    config.inject.general.options,
                    config.inject.head.options)
                )
            )
            .pipe(gulp.dest(config.html[env.name].path))
            // update browser
            .pipe( browserSync.reload({ stream: true }) );

    });
}