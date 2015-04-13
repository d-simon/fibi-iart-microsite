import $ from 'jquery';

import $cursorify from './cursor.js';
import $draggify from './draggable.js';
import $modalify from './modal.js';

$(document).ready(function () {
    $cursorify();
    $draggify();
    $modalify();
});