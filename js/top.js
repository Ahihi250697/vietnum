$('.mv__slider').slick({
    centerMode: true,
    centerPadding: '26%',
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: false,
    responsive: [{
        breakpoint: 769,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '0%',
        }
    }]
});