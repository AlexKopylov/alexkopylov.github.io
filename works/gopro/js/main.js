$(document).ready(function(){

    $(".nav-btn").click(function (e) {
        e.preventDefault();
        $(".tel-wrap").slideUp(100);
        $(".navigation__menu").slideToggle(700);
    });
    $(".tel-btn").click(function (e) {
        e.preventDefault();
        $(".navigation__menu").slideUp(100);
        $(".tel-wrap").slideToggle(700);
    });





});


