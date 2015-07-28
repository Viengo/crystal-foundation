
 //Slider Settings


 $(document).on('ready', function () {
     $(document).foundation({
         offcanvas: {
             close_on_click: true
         }
     });
 });


 $(window).on("scroll", function () {
     if ($(this).scrollTop() > 869) { //Any number you want
         $(".scroll-open").show()
     }
     else {
         $(".scroll-open").hide()
     }
 });

