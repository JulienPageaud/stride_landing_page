$(document).ready(function(){
  var mediaQuery = window.matchMedia( "(min-width: 768px)" );

  if (mediaQuery.matches) {
    $("#cloud9-carousel").Cloud9Carousel( {
      autoPlay: 1,
      bringToFront: true
    } );
  }
  else {
    $("#cloud9-carousel").Cloud9Carousel( {
      xOrigin: 0,
      yOrigin: null,
      xRadius: 130,
      yRadius: 60,
      farScale: 0.1,
      autoPlay: 1,
      bringToFront: true
    } );
  }
  // var nearestEl = $('#cloud9-carousel').data('cloud9-carousel').nearestItem()['element'];
  // $('cloud9-item').removeClass('front-item').addClass('side-item');
  // $nearestEl.addClass('front-item').removeClass('side-item');
})
