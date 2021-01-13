

(function ($) {
    function getScrollTop() {
      return document.documentElement.scrollTop
              || document.body.scrollTop
              || window.scrollY
              || window.pageYOffset;
    }
    function getViewportHeight() {
        var height = window.innerHeight;
      if (height) {
        return height;
      }
      var mode = document.compatMode;
  
      if (mode || !$.support.boxModel) {
        height = mode === 'CSS1Compat' ? document.documentElement.clientHeight :
        document.body.clientHeight; 
      }
      return height;
    }
    function offsetTop(debug) {
      var curtop = 0;
      for (var obj = debug; obj; obj = obj.offsetParent) {
        curtop += obj.offsetTop;
      }
      return curtop;
    }
    let count = -1,
        ArrayClass = ['fadeUp', 'fadeLeft', 'fadeDown'],
        offsetCheck = 0;
    function checkClass(ele, mapClass, offset) {
      for(let i = 0; i <= mapClass.length - 1; i++) {
        if(ele.is('.' + mapClass[i])) {
          if(offsetCheck != offset) {
            offsetCheck = offset;
            count = count + 1;
          }
            setTimeout(function() {
              ele.removeClass(mapClass[i]);
              ele.addClass('runed');
            }, 200 * count);
            return true;
          
        }
        }
      }
    
    function checkInView() {
      count = -1;
      var viewportTop = getScrollTop(),
          viewportBottom = viewportTop + getViewportHeight() - 50;
      $('.inview').each(function () {
        var $el = $(this),
            elTop = offsetTop(this),
            elHeight = $el.height(),
            elBottom = elTop + elHeight,
            offset = $el.data('offset') || 0,
            inView = elTop >= viewportTop && elBottom <= viewportBottom,
            isBottomVisible = elBottom + offset >= viewportTop && elTop <= viewportTop,
            isTopVisible = elTop - offset <= viewportBottom && elBottom >= viewportBottom,
            inViewWithOffset = inView || isBottomVisible || isTopVisible || elTop <= viewportTop && elBottom >= viewportBottom;
        if(elTop <= viewportBottom) {
          if (inViewWithOffset) {
            if (!$el.is('.runed')) {
                $el.addClass('active');
            }
          }else {
            $('.interview-figure').addClass('active');
          }
        }
      });
    }
    function createFunctionLimitedToOneExecutionPerDelay(fn, delay) {
      var timer = null;
      function runOncePerDelay() {
        clearInterval(timer);
        timer = setTimeout(function () {
          fn();
        }, delay);
      }
      return runOncePerDelay;
    }
    var runner = createFunctionLimitedToOneExecutionPerDelay(checkInView, 100);
  
    $(window).on('checkInView.inview click.inview ready.inview scroll.inview resize.inview', runner);
    if(getScrollTop() <= 0) {
      checkInView();
    }
  })(jQuery);

  $('img').on('load', function(){
    $.each($('.questionnaire-list.active'), function(){
        $(this).children('.questionnaire-answer').css('height', $(this).children('.questionnaire-answer').children().first().outerHeight() + 'px');
    })
  })
  
  $('.questionnaire-question').on('click', function(){
      if($(this).parent().is('.active')) {
          $(this).parent().removeClass('active');
          $(this).next().css('height', '0px');
      }
      else {
        $(this).parent().addClass('active');
        $(this).next().css('height', $(this).next().children().first().outerHeight() + 'px');
      }
  });

  window.addEventListener('resize', function(){
    $.each($('.questionnaire-list.active'), function(){
        $(this).children('.questionnaire-answer').css('height', $(this).children('.questionnaire-answer').children().first().outerHeight() + 'px');
    });
  })