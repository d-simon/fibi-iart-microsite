import $ from 'jquery';

function $modalify() {
    $('[data-js-bifi-info]').bind('click.bifi-info', function () {
        $('.infocard')
            .stop(true, false)
            .addClass('is-active dragged')
            .css({
                'top': Math.round($(document).height()*0.1 + 0.6 * Math.random() * ( $(document).height() - $('.infocard').height() )),
                'left': Math.round($(document).width()*0.1 + 0.6 * Math.random() * ( $(document).width() - $('.infocard').width() ))
            });
    });

    $('[data-js-bifi-close-info]').bind('click.bifi-info-close', function () {
        $('.infocard')
            .stop(true, false)
            .addClass('transition')
            .removeClass('is-active dragged')
            .delay(410)
            .queue(function(){
                $(this).removeClass("transition").attr('style','').dequeue();
            });
    });
}

export default $modalify;