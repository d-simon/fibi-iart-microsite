import $ from 'jquery';


$(document).ready(function () {
    var $body = $(document.body);

    $body.mousedown(function(){
        $body.toggleClass('is-mouse-down', true);
    }).mouseup(function(){
        $body.toggleClass('is-mouse-down', false);
    }).mouseout(function(){
        $body.toggleClass('is-mouse-down', false);
    });
});