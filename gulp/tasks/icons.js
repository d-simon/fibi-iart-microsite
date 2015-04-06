/*
** icons.js
***********
** SVG minifier/symbolizer
** The awesomeness: http://css-tricks.com/svg-symbol-good-choice-icons/
** Regex to get all icon names in sublime: (?:.*)symbol id="([^"]+)"(?:.*)
*/
module.exports = function(gulp, $, config, util) {
    //** Options **//
    //


    //** Dependencies **//
    //


    //** Task **//
    gulp.task('icons', [], function(){
        var env = util.env();

        return gulp.src(config.icons.src.files)
            // Report errors and keep watching
            .pipe($.plumber({ errorHandler: util.error }))
            // Clean up SVGs
            .pipe($.imagemin(config.icons.plugins.imagemin))
            // Replace empty fills
            .pipe($.replace(/\s?(fill|stroke)="([^"]*)"/g, ''))
            // Create SVG Sprite
            .pipe( $.svgSprite(config.icons.plugins.svgSprite) )
            // Write stream
            .pipe( $.rename(config.icons[env.name].filename) )
            .pipe( gulp.dest(config.icons[env.name].path) );
    });


    //** Main **//
    //
}