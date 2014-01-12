(function() {
  $(function() {
    var featureHeight, initialHeight;

    featureHeight = function($elements) {
      var accumulator;

      accumulator = 0;
      $elements.each(function() {
        return accumulator += $(this).outerHeight(true);
      });
      return accumulator;
    };
    initialHeight = function() {
      var h, height;

      h = 0;
      height = $('.feature').slice(0, 2);
      height.each(function() {
        return h += $(this).outerHeight(true);
      });
      return h;
    };
    setTimeout((function() {
      return $('.read-more-container').css('height', initialHeight());
    }), 100);
    $(document).on('click', '.readmore', function() {
      var $readMoreContainer;

      $readMoreContainer = $('.read-more-container');
      if ($readMoreContainer.outerHeight() > initialHeight()) {
        $readMoreContainer.animate({
          height: initialHeight()
        }, 500);
        $(this).text('Read more');
      } else {
        $readMoreContainer.animate({
          height: featureHeight($('.feature'))
        }, 500);
        $(this).text('Read less');
      }
      return false;
    });
    return $(document).on('click', '.js-img', function() {
      var image, lightboxContainer;

      image = $('<img/>').addClass('lightboxImage').attr('src', $(this).attr('src'));
      lightboxContainer = $('<div/>').addClass('lightbox').append(image);
      return $('body').append(lightboxContainer).on('keyup', function(e) {
        if (e.keyCode === 13 || e.keyCode === 27) {
          return $('.lightbox').remove();
        }
      });
    });
  });

}).call(this);
