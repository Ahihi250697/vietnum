const _hamburger = $('.hamburger');
const _nav = $('.nav');
const _nav_navbar = $('.nav__navbar');


_hamburger.on('click', function(e) {
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
    window.pageYOffset == 0 ? _nav.removeClass('active') : null;
    _nav_navbar.removeClass('active');
}

$(window).on('scroll load', function(e) {
    let _wY = window.pageYOffset;
    if (_wY > 0) {
        _nav.addClass('active')
    } else {
        _nav.removeClass('active')
    }
});
$(window).on('resize', function(e) {
    let _wW = window.innerWidth;
    if (_wW > 1024) {
        fn_remove();
    }
});