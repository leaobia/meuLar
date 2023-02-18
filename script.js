$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 6,
        autoplay: true,
        autoplayTimeout: 3000,
        navText: ['<', '>'],
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            1000: {
                items: 6
            }
        },
    });
});