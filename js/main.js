$(document).ready(function () {

    $('.header').css("height", $(window).height());
    //
    //$('.parallax-window').parallax({imageSrc: '/img/top-bg.jpg'});
    //function heightWindow() {
    //
    //}

    //heightWindow();

    //$(window).resize(function () {
    //    heightWindow();
    //});


    $(".top-header__item").mPageScroll2id();

    //секция ворк анимация плиток
    $("#portfolio").mixItUp();

    $(".work__item").click(function () {
        $(".work__item").removeClass('active');
        $(this).addClass('active');
    });

    $(".filter-btn").click(function () {
       $(".work__menu").slideToggle();
    });

    $('.popup-link').magnificPopup({
        type: 'inline',
        midClick: true
    });

    $(".portfolio__item").each(function (i) {
        $(this).find("a").attr("href", "#work_" + i);
        $(this).find(".portfolio__description").attr("id", "work_" + i);
    });

    //ajax без перезагрузки для формы
    $("#form").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", // Change
            data: th.serialize()
        }).done(function () {
            alert("Thank you!");
            setTimeout(function () {
                //Done Function
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });


    //$("input, select, textarea").jqBootstrapValidation();


});


