$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:3
    });
  });

  if($(window).width() < 960) {
    $(".owl-carousel").owlCarousel({
        items:2
    });
  }
  