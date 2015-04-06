/*
** watch.js
***********
** Watch task.
*/
module.exports = function(gulp, $, config, util) {
    //** Options **//
    //


    //** Dependencies **//
    var browserSync = require('browser-sync');
    var fs = require('fs');


    //** Task **//
    gulp.task('watch', [], function(){
        var pathLess = config.less.src.path + '/**/*.less';
        var pathSass = config.sass.src.path + '/**/*.{scss,sass}';
        var pathImages = config.images.src.path + '/**/*.{gif,png,jpg,jpeg,svg}';
        var pathJS = config.js.src.path + '/**/*.js';
        var pathIcons = config.icons.src.path + '/**/*.svg';
        var pathHtml = config.html.src.path + '/**/*.html';

        // Less files
        $.watch([pathLess], {
            name: 'Less Watcher',
            read: false
        },
            function(vinyl){
                gulp.start('less');
            }
        );

        // Sass files
        $.watch([pathSass], {
            name: 'Sass Watcher',
            read: false
        },
            function(vinyl){
                gulp.start('sass');
            }
        );


        // Image files
        $.watch([pathImages], {
            name: 'Image Watcher',
            read: false
        },
            function(vinyl){
                gulp.start('images');
            }
        );

        // Image files
        $.watch([pathIcons], {
            name: 'Icons Watcher',
            read: false
        },
            function(vinyl){
                gulp.start('icons');
            }
        );

        // JS files
        $.watch([pathJS], {
            name: 'Javascript Watcher',
            read: false
        },
            function(vinyl){
                gulp.start('webpack');
            }
        );

        // HTML files
        $.watch([pathHtml], {
            name: 'HTML Watcher',
            read: false
        },
            function(vinyl){
                gulp.start('inject');
            }
        );

        $.gutil.log($.gutil.colors.green("Finished Watch Main Task"));
    });


    //** Main **//
    //
}