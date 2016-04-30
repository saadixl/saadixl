/*
	Nav Smooth Scrolling
*/
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


$(document).ready(function(){

    /* Back to top */
    $(".navbar-brand").click(function(){
        $('html, body').animate({
          scrollTop: 0
        }, 1000);
    });



  $(window).on("scroll", function() {
    var windowWidth = $(window).width();
    var fromTop = $("body").scrollTop();
    if(fromTop>150 && windowWidth > 768 ){
      $("nav.navbar").css("padding","0");
    }
    else{
      $("nav.navbar").css("padding","30px 0");
    }
  });


});

 /*Owl Carosel*/
  $(".owl-carousel.pro").owlCarousel({
      loop:true,
      items:1,
      singleItem: true
  });

$(".owl-carousel.personal").owlCarousel({
      loop:true,
      items:3
});