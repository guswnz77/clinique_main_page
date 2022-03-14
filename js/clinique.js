$(function () {

    var num = 0
    setInterval(function () {
        if (num < 2) {
            num++
        } else {
            num=0
        }

        $('.main_slide div').removeClass("on")
        $('.main_slide div').eq(num).addClass("on")
    }, 4000);

    // $('.main_slide').slick({
    //     // centerMode: true,
    //     // centerPadding: '20px',
    //     autoplay:true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    // });

    $('.event_slide').slick({
        autoplay:true,

        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
    });


    $('.main_menu,.sub_bg').hover(function () {
        $('.sub_menu').stop().slideDown(400);
        $('.sub_bg').stop().slideDown(400);
    }, function () {
        $('.sub_menu').stop().slideUp();
        $('.sub_bg').stop().slideUp();
    });


    $('.best_box01').hover(function () {
        $('.bh01').stop().fadeIn(400);
    }, function () {
        $('.bh01').stop().fadeOut(400);
    });

    $('.best_box02').hover(function () {
        $('.bh02').stop().fadeIn(400);
    }, function () {
        $('.bh02').stop().fadeOut(400);
    });

    $('.best_box03').hover(function () {
        $('.bh03').stop().fadeIn(400);
    }, function () {
        $('.bh03').stop().fadeOut(400);
    });


})