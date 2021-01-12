const _hamburger = $('.hamburger');
const _nav = $('.nav');
const _nav_navbar = $('.nav__navbar');


_hamburger.on('click', function() {
    $(this).hasClass('active') ? fn_remove() : fn_add();
});

function fn_add() {
    _hamburger.addClass('active');
    _nav.addClass('active');
    _nav_navbar.addClass('active');
}

function fn_remove() {
    console.log('asdasd');
    _hamburger.removeClass('active');
    _nav.removeClass('active');
    _nav_navbar.removeClass('active');
}

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