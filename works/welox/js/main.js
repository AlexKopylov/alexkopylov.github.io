$(document).ready(function () {

    function heightWindow() {
      $(".top-header").css("height", $(window).height());
    }

    heightWindow();
    $(window).resize(function() {
        heightWindow();
    });

    $(".sidebar-button").click(function(){
        $(this).next().slideToggle();
    });

    $(".gallery_bnt").click(function(){
        $(".p-menu").slideToggle();
    });

    $(".contact-btn").click(function(){
        $(".contact__list").slideToggle();
    });

    $(".form-btn_top").click(function(){
        $(".form").slideToggle();
    });


    $('.slider').slick({
        //autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
        //autoplaySpeed: 1000
    });

    $(".top").click(function(){
        $("html, body").animate({scrollTop: 0}, "slow");
        return false;
    });


    $("input,select,textarea").jqBootstrapValidation(); // âàëèäïöèÿ ôîğìû





});

//
//var slider = (function () {
//
//    // private
//
//    return {
//        init: function () {
//
//            var _this = this;
//
//            $('.slider__controls-button').on('click', function (e) {
//                e.preventDefault();
//
//                var
//                    $this = $(this),
//                    slides = $this.closest('.slider').find('.slider__item'),
//                    activeSlide = slides.filter('.active'),
//                    nextSlide = activeSlide.next(),
//                    prevSlide = activeSlide.prev(),
//                    firstSlide = slides.first(),
//                    lastSlide = slides.last();
//
//                if ($this.hasClass('slider__controls-button_next')) {
//
//                    if (nextSlide.length) {
//                        _this.moveSlide(nextSlide, 'forward');
//                    } else {
//                        _this.moveSlide(firstSlide, 'forward');
//                    }
//
//                } else {
//
//                    if (prevSlide.length) {
//                        _this.moveSlide(prevSlide, 'backward');
//                    } else {
//                        _this.moveSlide(lastSlide, 'backward');
//                    }
//
//
//                }
//
//            });
//
//        },
//
//        moveSlide: function (slide, direction) {
//
//            var
//                container = slide.closest('.slider'),
//                slides = container.find('.slider__item'),
//                activeSlide = slides.filter('.active'),
//                slideWidth = slides.width(),
//                duration = 500,
//                reqCssPosiyion = 0,
//                reqSlideStrafe = 0;
//
//            if (direction === 'forward') {
//                reqCssPosiyion = slideWidth;
//                reqSlideStrafe = -slideWidth;
//            } else if (direction === ' backward') {
//                reqCssPosiyion = -slideWidth;
//                reqSlideStrafe = slideWidth;
//            }
//
//            slide.css('left', reqCssPosiyion).addClass('inslide');
//
//            var movablesSlide = slides.filter('.inslide');
//
//            activeSlide.animate({left: reqSlideStrafe}, duration);
//
//            movablesSlide.animate({left: 0}, duration, function () {
//                var $this = $(this);
//
//                slides.css('left', '0').removeClass('active');
//
//                $this.toggleClass('inslide active');
//            });
//
//
//        }
//    }
//
//
//}());
//
//$(document).ready(function () {
//    if ($('.slider').length) {
//        slider.init();
//    }
//
//}); // - > ready_end;

//$(document).ready(function(){
//
//      $('.slider__controls-button').on('click', function(e){
//          e.preventDefault();
//
//          var
//              $this = $(this),
//              container = $this.closest('.slider'),
//              list = container.find('.slider__list'),
//              items = container.find('.slider__item'),
//              activeSlide = items.filter('.active'),
//              nextSlide = activeSlide.next(),
//              prevSlide = activeSlide.prev(),
//              firstSlide = items.first(),
//              lastSlide = items.last(),
//              sliderOffset = container.offset().left,
//              reqPos = 0;
//
//
//          if ($(this).hasClass('slider__controls-button_next')) {
//              if (nextSlide.length) {
//                  findReqPos(nextSlide);
//                  removeActiveClasss(nextSlide);
//              } else {
//                  findReqPos(firstSlide);
//                  removeActiveClasss(firstSlide);
//              }
//          } else {
//              if (prevSlide.length) {
//                  findReqPos(prevSlide);
//                  removeActiveClasss(prevSlide);
//              } else {
//                  findReqPos(lastSlide);
//                  removeActiveClasss(lastSlide);
//              }
//          }
//
//          list.css('left', '-=' + reqPos + 'px');
//
//          function removeActiveClasss (reqSlide) {
//              reqSlide.addClass('active').siblings().removeClass('active');
//          }
//          function findReqPos (slide) {
//              reqPos = slide.offset().left - sliderOffset;
//          }
//
//
//      });
//
//}); // ->ready-end;