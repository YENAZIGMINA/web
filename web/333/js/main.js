$('.nav ul li').mouseover(function () {
    $(this).find('.submenu').stop().slideDown();
});

$('.nav ul li').mouseleave(function () {
    $(this).find('.submenu').stop().slideUp();
});


//slide //2)🔸↓ 점 누르면 이미지 슬라이드
$('#imgsbar li a').click(function(event){
    event.preventDefault(); 
    // ❗ event. 클릭했을때 위로 화면창 올라가는 것 방지 (#에 의해서 새로고침되는 현상을 막아줌 )

    //.attr(b) ==> b속성값을 가져와라
    //.attr('img-left') ==> -4000px 속성값을 가져옴(반환됨)
    //.attr(b,c) ==> b가 가진 속성값을 c로 바꿔라

    var imgLeft=$(this).attr('img-left')
    console.log(imgLeft)
    //$('#imgs').animate({실행문},시간)
    $('.imgs').animate({
        left:imgLeft
    },500)
});


//모달창(팝업창)
$('.partner_info').click(function(){
    //$('.modal').show();
    $('.modal').fadeIn();
});

$('.modal .close').click(function(){
    //$('.modal').hide();
    $('.modal').fadeOut();
});


//윈도우 연결

$('.contact').click(function(){
    window.open("contact.html", "contact", "width=400,height=300,left=200,top=300");
});