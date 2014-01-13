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
      height = $('.read-more-container .feature').slice(0, 2);
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
    $(document).on('click', '.hamburger', function() {
      var $navUl;

      $navUl = $('nav.header ul');
      return $navUl.toggleClass('open-nav');
    });
    $(document).on('click', '.js-img', function() {
      var image, lightboxContainer;

      image = $('<img/>').addClass('lightboxImage').attr('src', $(this).attr('src'));
      lightboxContainer = $('<div/>').addClass('lightbox').append(image);
      return $('body').append(lightboxContainer).on('keyup', function(e) {
        if (e.keyCode === 13 || e.keyCode === 27) {
          return $('.lightbox').remove();
        }
      });
    });
    $(document).on('click', '.lightbox', function() {
      return $('.lightbox').remove();
    });
    return $(document).on('click', 'footer nav h3', function() {
      var $footerUL;

      $footerUL = $('footer nav ul');
      $(this).siblings().toggleClass('footer-open');
      return $('html, body').animate({
        scrollTop: $(document).height()
      }, 400);
    });
  });

}).call(this);
