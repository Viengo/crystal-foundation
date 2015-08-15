$(document).on('ready', function () {
    $(document).foundation({
        offcanvas: {
            close_on_click: true
        },
        topbar: {
            scrolltop: false // jump to top when sticky nav menu toggle is clicked
        },
        "magellan-expedition": {
            destination_threshold: 0 // pixels from the top of destination for it to be considered active

        }
    });


    var CJ = window.CJ || {};

    CJ.Parallax = function () {
        //if (device.desktop()) {
            this.parallaxIt();
        //};
    }

    CJ.Parallax.prototype = {
        parallaxIt: function() {
            var screenHeight = $(window).height();

            $('section[data-type="parallax"]').each(function(){
                var parallaxArea = $(this),
                    speed = parallaxArea.data('speed');

                $(window).scroll(function() {
                    var areaTopPos = parallaxArea.offset().top,
                        visible = screenHeight + $(window).scrollTop() - areaTopPos >= 0;

                    if (visible) {
                        var yPos = -($(window).scrollTop() / speed - areaTopPos / speed),
                            bgValue = 'center '+ yPos + 'px';

                        parallaxArea.css('background-position', bgValue);
                    }
                });
            });
        }
    };
    new CJ.Parallax();

    // Slow scroll to anchor
    smoothScroll.init({
        offset: 60
    });

    $('.nav-list a').on('click', function(){
        smoothScroll.init({
            offset: 45
        })
    });


    // Clearing open

    $('#graphic .btn').on('click', function (e) {
        e.preventDefault();
        $('#graphic [data-clearing] li img').first().trigger('click');
    });
    $('#web .btn').on('click', function (e) {
        e.preventDefault();
        $('#web [data-clearing] li img').first().trigger('click');
    });

  //Modal

    $('.close-modal').on('click', function () {
        $(this).foundation('reveal', 'close');
    });

    $('#feedback').on('valid.fndtn.abide', function (e) {
        var form = $(e.target),
            formData = form.serialize();

        $.ajax({
            url: 'mailer.php',
            type: "POST",
            data: formData,
            success: function (responce) {
                responce = responce != "" ? $.parseJSON(responce) : {};

                if (responce.status == 'ok') {
                    form.trigger('reset');
                    $('#ok').foundation('reveal', 'open');
                    // modal ok
                    // Your message sent. We contact with you soon.
                } else {
                    $('#fail').foundation('reveal', 'open');
                    // modal false
                    // Sorry something wrong! Please contact us via email.
                }
            },
            fail: function () {
                $('#fail').foundation('reveal', 'open');
                // modal false
                // Sorry something wrong! Please contact us via email.
            }
        });
    });
});
