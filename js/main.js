$('.header').css("height", $(window).height());
$('.contact').css("height", $(window).height());
$(document).ready(function () {

    //$('.header').css("height", $(window).height());

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

    //$('.popup-link').magnificPopup({
    //    type: 'inline',
    //    midClick: true
    //});

    // $(".portfolio__item").each(function (i) {
    //     $(this).find("a").attr("href", "#work_" + i);
    //     $(this).find(".portfolio__description").attr("id", "work_" + i);
    // });

    //==================================================================================
    //==================================================================================
    //==================================================================================


//    // DOM Elements
//
//    const button = document.querySelector('.js-button')
//    const circle = document.querySelector('.js-circle')
//    const text = document.querySelector('.js-text')
//
//
//// Circle radius, diameter and offset function
//
//    const radius = circle.getAttribute('r')
//    const diameter = Math.round(Math.PI * radius * 2)
//    const getOffset = (val = 0) => Math.round((100 - val) / 100 * diameter)
//
//
//// Generate random number and set offset and percentage
//
//    const run = () => {
//        const val = Math.floor(Math.random() * 100)
//        circle.style.strokeDashoffset = getOffset(val)
//        text.textContent = `${val}%`
//    }
//
//
//// Event listeners
//
//    button.addEventListener('click', run)
//    document.addEventListener('DOMContentLoaded', () => setTimeout(run, 10))
     //=====================================================================================

    //=====================================================================================


    //$(document).ready(function() {
        $(".container1").click(function() {
            $(".stick").toggleClass(function () {
                return $(this).is('.open, .close') ? 'close' : 'open';
            });
        });
    //});

//=====================================================================================
    //=====================================================================================







    //ajax без перезагрузки для формы
    //$("#form").submit(function () { //Change
    //    var th = $(this);
    //    $.ajax({
    //        type: "POST",
    //        url: "mail.php", // Change
    //        data: th.serialize()
    //    }).done(function () {
    //        alert("Thank you!");
    //        setTimeout(function () {
    //            //Done Function
    //            th.trigger("reset");
    //        }, 1000);
    //    });
    //    return false;
    //});

});


