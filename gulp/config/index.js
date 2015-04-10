/*
** base.js
**********
** Config file for gulp.
*/


//** Options **//
var paths = require('./paths.js');
var cfgInject = require('./inject.js');
var cfgSync = require('./sync.js');
var cfgWebpack = require('./webpack.js');
var cfgGulpPlugins = require('./gplugins.js');
var cfgIcons = require('./icons.js');

//** Dependencies **//
var path = require('path');
var requireDir = require('require-dir');
var util = requireDir('../util');
var gutil = require('gulp-util');


//** Main **//
var autoprefixerCfg = {
    browsers: ['> 1%', 'last 20 versions', 'Firefox ESR'],
    cascade: false
};


//** Export **//
module.exports = {
    copy: {
        src: {
            path: paths.src,
            folders: [
                'js/vendor/**',
                'ico/**',
                'fonts/**'
            ]
        },
        build: {
            path: (paths.build)
        },
        dist: {
            path: (paths.dist)
        }
    },
    gulpPlugins: cfgGulpPlugins,
    paths: paths,
    sync: cfgSync,
    inject: cfgInject,
    html: {
        options: {
            indentation: 2
        },
        src: {
            path: path.join(paths.src, 'html'),
            files: [
                path.join(paths.src, 'html/*')
            ]
        },
        build: { path: path.join(paths.build, '') },
        dist: { path: path.join(paths.dist, '') }
    },
    icons: cfgIcons,
    images: {
        options: {
            /* PNG */ optimizationLevel: 3,
            /* JPG */ progressive: true,
            /* GIF */ interlaced: true,
            /* SVG */ svgoPlugins: [],
            /* others / override plugin */ use: []
        },
        src: {
            path: path.join(paths.src, 'img')
        },
        build: { path: path.join(paths.build, 'img') },
        dist: { path: path.join(paths.dist, 'img') }
    },
    less: {
        plugins: {
            autoprefixer: autoprefixerCfg,
            sourcemaps: {
                sourceRoot: 'source-less:///'
            }
        },
        src: {
            path: path.join(paths.src, 'less'),
            files: []
        },
        build: { path: path.join(paths.build, 'css') },
        dist: { path: path.join(paths.dist, 'css') }
    },
    sass: {
        plugins: {
            autoprefixer: autoprefixerCfg,
            sourcemaps: {
                sourceRoot: 'source-scss:///'
            }
        },
        src: {
            path: path.join(paths.src, 'scss'),
            files: [
                path.join(paths.src, '/scss/**/*.scss')
            ]
        },
        build: {
            path: path.join(paths.build, 'css'),
            outputStyle: 'nested'
        },
        dist: {
            path: path.join(paths.dist, 'css'),
            outputStyle: 'compressed'
        }
    },
    js: {
        src: {
            path: path.join(paths.src, 'js'),
            files: [
                path.join(paths.src, '/js/app/main/index.js')
            ]
        },
        build: { path: path.join(paths.build, 'js') },
        dist: { path: path.join(paths.dist, 'js') }
    },
    webpack: cfgWebpack
}
