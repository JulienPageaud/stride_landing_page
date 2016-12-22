// Animations
$(document).ready(function() {
  $window = $(window)
  $features = $('.feature')
  $carousels = $('.carousel')
  $window.on('scroll', check_if_in_view);

  function check_if_in_view() {
    var windowHeight = $window.height();
    var topOfWindow = $window.scrollTop();
    var bottomOfWindow = (topOfWindow + windowHeight);

    $features.each(function () {
      var $this = $(this)
      var thisHeight = $this.outerHeight();
      var thisTop = $this.offset().top;
      var thisBottom = (thisTop + thisHeight);

      if ((thisBottom >= topOfWindow) && (thisTop <= bottomOfWindow)) {
        $this.addClass('slideUp');
      }
    });

    $carousels.each(function() {
      var $element = $(this)
      var elementHeight = $element.outerHeight();
      var elementTop = $element.offset().top;
      var elementBottom = (elementTop + elementHeight);

      if ((elementTop <= bottomOfWindow && elementBottom >= topOfWindow)) {
        $element.addClass('fadeIn');
      }
    });
  };
})
