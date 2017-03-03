$(document).ready(function () {
    //фиксированый header
    $(".top-header").removeClass("default");
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $(".top-header").addClass("default").fadeIn('fast');
        } else {
            $(".top-header").removeClass("default").fadeIn('fast');
        }
    });

    $('.topSlider__menu').bxSlider({
        randomStart: true,
        infiniteLoop: true,
        touchEnabled: true,
        controls: false,
        speed: 1500,
        auto: true
    });

    $('.main-slider__menu').bxSlider({
        mode: 'fade',
        speed: 500,
        infiniteLoop: true,
        touchEnabled: true,
        startSlide: 2,
        pager: false

    });

    $(".gallery__item").each(function (i) {
        $(this).find("a").attr("href", "#work_" + i);
        $(this).find(".gallery__popup").attr("id", "work_" + i);
    });


    $(".shows").magnificPopup({
        type: 'inline',
        gallery: {
            enabled: true
        },
        midClick: true,
        callbacks: {
            open: function () {
                $(".wrapper").addClass("blur");
            },
            close: function () {
                $(".wrapper").removeClass("blur");
            }
        }
    });

    $(".top-btn").click(function () {
        $(".top-header__menu").slideToggle();
    });

});

