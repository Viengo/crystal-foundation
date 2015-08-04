
 //foundation settings

 $(document).on('ready', function () {
     $(document).foundation({
         offcanvas: {
             close_on_click: true
         }
     });

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

 });



//scroll-open effect
 $(window).on("scroll touchmove", function () {
     if ( $(document).scrollTop() > 869) {
         $('.contain-to-grid').addClass('fixed');
         $(".scroll-open").show()
     }
     else {
         $(".scroll-open").hide()
     }
 });

