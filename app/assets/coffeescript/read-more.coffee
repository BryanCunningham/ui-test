featureHeight = ->
      accumulator = 0
      $('.feature').each ->
        accumulator += $(this).outerHeight(true)
      console.log accumulator
      return accumulator

$ ->

  window.LP = (->

    initialHeight = 400

    return {

      open : $('.readmore').on 'click', ->
        if $('.read-more-container').height() > 400
          $('.read-more-container').animate(
            height: initialHeight
          , 500)
          $(this).text('Read more')
        else
          $('.read-more-container').animate(
            height: featureHeight()
          , 500)
          $(this).text('Read less')
        false


      lightbox : $('.images-container').on 'click', 'img', ->
        image = $('<img/>').addClass('lightboxImage').attr('src', $(this).attr('src'))
        lightboxContainer = $('<div/>').addClass('lightbox').append(image)

        $('body').append(lightboxContainer).on 'keyup', (e) ->
          if e.keyCode is 13 or e.keyCode is 27
            $('.lightbox').remove()

    }
  )()