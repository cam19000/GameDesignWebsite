$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        pause: 3000,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 0,
        slideWidth: 500,
        captions: true,
        slideMargin: 20,
        randomStart: true,
        pager: true,
        pagerType: "short"
    });
});