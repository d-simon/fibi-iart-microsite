/*
** clean.js
***********
** Cleans directories.
*/
module.exports = function(gulp, $, config, util) {
    //** Options **//
    //


    //** Dependencies **//
    var del = require('del');


    //** Task **//
    gulp.task('clean:env', [], function(cb){
        clean('env', cb);
    });

    gulp.task('clean:css', [], function(cb){
        clean('css', cb);
    });

    gulp.task('clean:js', [], function(cb){
        clean('js', cb);
    });

    gulp.task('clean:html', [], function(cb){
        clean('html', cb);
    });

    gulp.task('clean:images', [], function(cb){
        clean('images', cb);
    });


    //** Main **//
    function clean(type, cb) {
        var env = util.env();

        switch(type) {
            case 'env':
                del([ config.paths[env.name] + '/*' ], { force: true }, cb);
                break;
            case 'css':
                del([ config.less[env.name].path + '/*' ], { force: true }, cb);
                del([ config.sass[env.name].path + '/*' ], { force: true }, cb);
                break;
            case 'js':
                del([ config.js[env.name].path + '/*' ], { force: true }, cb);
                break;
            case 'html':
                del([ config.html[env.name].path + '/*.html' ], { force: true }, cb);
                break;
            case 'images':
                del([ config.images[env.name].path + '/*' ], { force: true }, cb);
                break;
            default:
                break;
        }
    }
};