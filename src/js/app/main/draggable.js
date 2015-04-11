import $ from 'jquery';

function $draggify() {
    var $draggables = $('[data-js-draggable]'),
        $body = $(document.body),
        isModified = false;

    $draggables
        .on('mousedown', function (e) {
            var $this = $(this);

            $this.addClass('draggable');

            var $draggable = $body.find('.draggable'),
                grabOffsetDistanceY = $draggable.offset().top + $draggable.outerHeight() / 2 - e.pageY,
                grabOffsetDistanceX = $draggable.offset().left + $draggable.outerWidth() / 2 - e.pageX;

            /**
             * Abort if we are aout of bounds
             */
            if ($draggable.offset().top === 0 && $draggable.offset().left === 0) {

                $draggable
                    .removeClass('draggable')
                return false;
            }

            /**
             * - set flag
             * - Add helper class to augment certain properties which could interfere
             * - Set initial offset
             */
            isModified = true;
            $this.addClass('dragged');
            $draggable
                    .offset({
                        top: e.pageY + grabOffsetDistanceY  - $draggable.outerHeight() / 2,
                        left: e.pageX + grabOffsetDistanceX  - $draggable.outerWidth() / 2
                    })

            /**
             * Bind mousemove with namespace 'draggable'
             */
            $body.bind('mousemove.draggable', function(e) {
                var $this = $(this),
                    $draggable = $this.find('.draggable');

                $draggable
                    .offset({
                        top: e.pageY +grabOffsetDistanceY  - $draggable.outerHeight() / 2,
                        left: e.pageX +grabOffsetDistanceX  - $draggable.outerWidth() / 2
                    })
                    .on('mouseup', function() {
                        $(this).removeClass('draggable');
                    });
                // e.preventDefault();
            });
        });

    /**
     * Clean up after yourself
     */
    $body.on('mouseup', function () {
        $('.draggable')
            .removeClass('draggable')
        $body.unbind('mousemove.draggable');
    });

    $(window).resize(function () {
        if (isModified) {
            isModified = false
            var $dragged = $body.find('.dragged');
            $dragged.removeClass('dragged').attr('style', '');
        }
    });
}

export default $draggify;