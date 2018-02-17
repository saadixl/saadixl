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
  personalProj();
  revealEmail();
});

$(window).scroll(function() {
  var windowWidth = $(window).width();
  var fromTop = $("body").scrollTop();
  if((fromTop>150 || $(window).scrollTop() > 150) && windowWidth > 768 ){
    $("nav.navbar").css("padding","0");
  }
  else{
    $("nav.navbar").css("padding","30px 0");
  }
});

$(window).resize(function(){
  personalProj();
});

function personalProj() {
    var windowWidth = $(window).width();
    var fromTop = $("body").scrollTop();
    if(windowWidth < 992 ){
      var twiceDiv = $("#experiments .container").width();
      var owlContainer = $("#experiments .owl-item").length * twiceDiv;
      $(".owl-stage").css("width", owlContainer);
      $("#experiments .owl-item").css("width", twiceDiv/2);
    }
}

 /*Owl Carosel*/
  $(".owl-carousel.pro").owlCarousel({
      loop:true,
      items:1,
      autoPlay: 3000,
      singleItem: true
  });

$(".owl-carousel.personal").owlCarousel({
      loop:true,
      autoPlay: 3000,
      pagination: false
});

function revealEmail() {
  var el = $('.contact-form form');
  var currentAction = el.attr('action');
  var newAction = currentAction.replace('-at-', '@').replace('-dot-', '.');
  el.attr('action', newAction);
}
