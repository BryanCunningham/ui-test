$(document).ready ->

  featureHeight = ($elements) ->
    accumulator = 0
    $elements.each ->
      accumulator += $(this).outerHeight(true)
    return accumulator

  initialHeight = ->
    h = 0
    height = $('.feature').slice(0,2)
    height.each ->
      h += $(this).outerHeight(true)
    return h

  $('.read-more-container').css('height', initialHeight())
  $(document).on 'click', '.readmore', ->
  # handlers don't attach on page load
    $readMoreContainer = $('.read-more-container')
    # cached selector. Only crawls DOM once to find matching nodes.
    if $readMoreContainer.height() > initialHeight()
      $readMoreContainer.animate(
        height: initialHeight()
      , 500)
      $(this).text('Read more')
    else
      $readMoreContainer.animate(
        height: featureHeight($('.feature'))
      , 500)
      $(this).text('Read less')
    false


  $(document).on 'click', '.js-img', ->
    image = $('<img/>').addClass('lightboxImage').attr('src', $(this).attr('src'))
    lightboxContainer = $('<div/>').addClass('lightbox').append(image)

    $('body').append(lightboxContainer).on 'keyup', (e) ->
      if e.keyCode is 13 or e.keyCode is 27
        $('.lightbox').remove()