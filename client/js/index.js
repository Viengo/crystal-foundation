
 //Slider Settings
     //parallax

 $(document).on('ready', function () {
     $(document).foundation();
    // $(".scroll-open").hide();
 });



 $(window).on("scroll", function () {
     if ($(this).scrollTop() > 869) { //Any number you want
         $(".scroll-open").show()
     }
     else {
         $(".scroll-open").hide()
     }
 });
   //  $('.parallax-window').parallax({
      //   naturalHeight: 900
    // });
