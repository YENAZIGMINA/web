$('.nav ul li').mouseover(function () {
    $(this).find('.submenu').stop().slideDown();
});

$('.nav ul li').mouseleave(function () {
    $(this).find('.submenu').stop().slideUp();
});