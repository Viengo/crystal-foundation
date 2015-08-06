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
        var formData = $(e.target).serialize();
console.log(1);

        $.ajax({
            url: 'mailer.php',
            type: "POST",
            data: formData,
            success: function (responce) {
                console.log(responce);
                if (responce.status == 'ok') {
                    // modal ok
                } else {
                    // modal false
                }
            },
            fail: function () {
                // modal false
            }
        });
    });
});
