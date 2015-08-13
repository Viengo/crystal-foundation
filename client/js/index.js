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


    // Slow scroll to anchor
    smoothScroll.init();

    // Parallax scroll effect settings

    $('.parallax').laxicon({
        bgImgPath: 'client/images/backgrounds/header-back.jpg'
    });
    $('.work').laxicon({
        bgImgPath: 'client/images/backgrounds/work-back.jpg'
    });
    $('.contact').laxicon({
        bgImgPath: 'client/images/backgrounds/contact-back.jpg'
    });

    // Clearing open

    $('#graphic .buton').on('click', function (e) {
        e.preventDefault();
        $('#graphic [data-clearing] li img').first().trigger('click');
    });
    $('#web .buton').on('click', function (e) {
        e.preventDefault();
        $('#web [data-clearing] li img').first().trigger('click');
    });

    $('#feedback').on('valid.fndtn.abide', function (e) {
        var form = $(e.target),
            formData = form.serialize();

        $.ajax({
            url: 'mailer.php',
            type: "POST",
            data: formData,
            success: function (responce) {
                responce = JSON.parse(responce);

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
