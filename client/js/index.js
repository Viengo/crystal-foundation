
 //foundation settings

 $(document).on('ready', function () {
     $(document).foundation({
         offcanvas: {
             close_on_click: true
         }
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


// //scroll-open effect
// $(window).on("scroll touchmove", function () {
//     if ($('.contain-to-grid').toggleClass('fixed', $(document).scrollTop() > 1869)) {
//         $(".scroll-open").show()
//     }
//     else {
//         $(".scroll-open").hide()
//     }
// });



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

