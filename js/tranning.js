$(document).ready(function() {
    $('.js-inview').one('inview', function(event, isInView) {
        if (isInView) {
            $(this).each(function() {
                var val = $(this).text();
                if (val.length < 2) {
                    var dur = 500;
                } else {
                    var dur = 3000;
                }
                $(this).prop('Counter', 0).animate({
                    Counter: val
                }, {
                    duration: dur,
                    easing: 'swing',
                    step: function(now) {
                        if (val.indexOf('.') == -1) {
                            $(this).text(Math.ceil(now));
                        } else {
                            $(this).text(Math.floor(now * 10) / 10);
                        }

                    }
                });
            });
        }
    });
    $('.c-chart02__item').each(function() {
        var data01, data02;
        data01 = $(this).find('.label02').attr('data-percent');
        data02 = $(this).find('.label01').attr('data-percent');
        chartCustom(this, data01, data02);
    })

})