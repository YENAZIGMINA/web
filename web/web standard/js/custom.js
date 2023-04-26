$('.tit .btn').click(function () {
    //$('.nav').css({display:"block"})
    //$('.nav').show();
    //$('.nav').slideDown();
    //$('.nav').toggle(); -> toggle : 버튼누르면 나타났다가 다시 버튼누르면 사라짐
    //$('.nav').fadeToggle();
    $('.nav').slideToggle();
    $(this).toggleClass("on"); //버튼클릭하면 클래스명 입력 "on" -> 올리는 픽토그램으로 바꿔야 하니 여기서 클래스 on 만듦
})

// banner
// 🔹4) slick사이트 Initialize 복붙
$(document).ready(function () {
    $('.ban').slick({
        slidesToShow: 3, // 첫화면에 3개보이고
        slidesToScroll: 1,  // 한칸씩 움직일지? 3개씩 움직일지 지정
        
        dots: true, // 밑에 점

        autoplay:true,
        autoplaySpeed: 2000
    });
});