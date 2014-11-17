var main = function() {
  $('.arrow-next').click(function() {
    var currentSlide = $('.active-block');
    var nextSlide = currentSlide.next();
 	 

    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();

    if(nextSlide.length === 0) {
      nextSlide = $('.block').first();
      nextDot = $('.dot').first();
    }
    
    currentSlide.fadeOut(600).removeClass('active-block');
    nextSlide.fadeIn(600).addClass('active-block');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
  });


  $('.arrow-prev').click(function() {
    var currentSlide = $('.active-block');
    var prevSlide = currentSlide.prev();

    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();

    if(prevSlide.length === 0) {
      prevSlide = $('.block').last();
      prevDot = $('.dot').last();
    }
    
    currentSlide.fadeOut(600).removeClass('active-block');
    prevSlide.fadeIn(600).addClass('active-block');

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
  });

}

$(document).ready(main);
