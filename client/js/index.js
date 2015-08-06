$(document).on('ready', function () {
    $(document).foundation({
        offcanvas: {
            close_on_click: true
        }
    });

    // Slow scroll to anchor
    smoothScroll.init();

    //Parallax scroll effect settings
    $(document).parallax({
        naturalWidth: 1920,
        speed: 0.1
    });

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
                    // modal ok
                    // Your message sent. We contact with you soon.
                } else {
                    // modal false
                    // Sorry something wrong! Please contact us via email.
                }
            },
            fail: function () {
                // modal false
                // Sorry something wrong! Please contact us via email.
            }
        });
    });
});
