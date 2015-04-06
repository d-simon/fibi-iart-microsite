/*
** gulpfile.js
**************
** Rather than manage one giant configuration file responsible
** for creating multiple tasks, each task has been broken out into
** its own file in gulp/tasks. Any files in that directory get
** automatically required below.
**
** To add a new task, simply add a new task file that directory.
** gulp/tasks/default.js specifies the default set of tasks to run
** when you run `gulp`.
*/


//** Options **//
var config = require('./gulp/config/index.js');


//** Dependencies **//
var requireDir = require('require-dir');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')( config.gulpPlugins );


//** Task **//


//** Main **//
var tasks = requireDir('./gulp/tasks', { recurse: false });
var util = requireDir('./gulp/util', { recurse: false });

for (var task in tasks) {
    if (tasks.hasOwnProperty(task) && typeof(tasks[task]) == 'function') {
        tasks[task].call(this, gulp, $, config, util);
    }
}