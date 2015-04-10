function $cursorify() {
    var $body = $(document.body),
        $nono = $('.nono');

    $body.on('mousedown', function () {
        $body.toggleClass('is-mouse-down', true);
    }).on('mouseup mouseout', function () {
        $body.toggleClass('is-mouse-down', false);
    });

    var stepper = (function () {
            var state = false;
            return function () {
                state = !state;
                return state;
            };
        })(),
        interval;

    $nono.on('mouseenter', function () {
        interval = setInterval(function () {
                var state = stepper();
                $body
                    .toggleClass('is-nono-hover', !state)
                    .toggleClass('is-nono-hover-2', state);
            }, 400);
    }).add($body).on('mouseout', function () {
        clearInterval(interval);
        $body
            .toggleClass('is-nono-hover-2', false)
            .toggleClass('is-nono-hover', false);
    });
}

export default $cursorify;