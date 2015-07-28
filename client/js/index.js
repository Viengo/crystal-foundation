
 //foundation settings

 $(document).on('ready', function () {
     $(document).foundation({
         offcanvas: {
             close_on_click: true
         }
     });
 });


//scroll-open effect
 $(window).on("scroll touchmove", function () {
     if ($('.contain-to-grid').toggleClass('fixed', $(document).scrollTop() > 869)) {
         $(".scroll-open").show()
     }
     else {
         $(".scroll-open").hide()
     }
 });




// $(window).on("scroll", function () {
//     if ($(this).scrollTop() > 869) { //Any number you want
//         $(".scroll-open").show()
//     }
//     else {
//         $(".scroll-open").hide()
//     }
// });

 // $(window).on("scroll touchmove", function () {
 //     $('.contain-to-grid').toggleClass('fixed', $(document).scrollTop() > 869);
 //     $(".scroll-open").show()
 //
 // });

