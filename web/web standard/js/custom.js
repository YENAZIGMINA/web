
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
$('.ban').slick({
    slidesToShow: 3, // 첫화면에 3개보이고
    slidesToScroll: 1, // 한칸씩 움직일지? 3개씩 움직일지 지정
    dots: true, // 밑에 점bar
    autoplay: true,
    autoplaySpeed: 2000
});



//갤러리 //slcik - Initialize 복붙 후 내가설정한 클래스명과 동일하게 변경
$('.gallery_img').slick({
    arrows : false, //next,pre~버튼 없애기 (gitHUB 참고)
  });

$('.gallery_btn .play').click(function(){
    $('.gallery_img').slick('slickPlay');
    // ↑ slick - github - Methods에서 복붙, 적용해서 움직이는 것이랑 $이름같아야함!
    // .slick('') ''안에는 적용하고 싶은 메소드에서 복붙 / slcikPlay 자동재생
})
$('.gallery_btn .pause').click(function(){
    $('.gallery_img').slick('slickPause');
})
$('.gallery_btn .prev').click(function(){
    $('.gallery_img').slick('slickPrev');
})
$('.gallery_btn .next').click(function(){
    $('.gallery_img').slick('slickNext');
})



//탭메뉴
let tab_list = $('.tab_menu');

tab_list.find('ul ul').hide();
tab_list.find('li.active ul').show();

$('.tab_menu>ul>li>a').click(function (event) {
    event.preventDefault();

    var $this = $(this);

    // 한줄로 줄이기
    $this.next().show().parent('li').addClass("active").siblings('li').removeClass("active").find('ul').hide();


    /*  $this.next().show();
        $this.parent('li').addClass("active"); 
        $this.parent('li').siblings('li').removeClass("active");
        $this.parent('li').siblings('li').find('ul').hide(); */


    /*  🔹.next()는 바로 아래 동생 의 ul을 show해라
        $this.next().show();

        🔹.parent()는 클릭한 것의 부모 에게 클래스명 "active"를 추가해라 
          (css에서 active에 작성한 값 실행됨)
        $this.parent('li').addClass("active");

        🔹.siblings()는 나를 제외한 형제 들은 클래스명을 빼라
        $this.parent('li').siblings('li').removeClass("active");
        
        🔹 내 부모li의 다른형제li들의 하위요소(find)인 ul은 숨겨라
        $this.parent('li').siblings('li').find('ul').hide(); */

})


// 레이어 팝업
$('.layer').click(function(event){
    event.preventDefault();
    $('#layer').fadeIn();
});
$('#layer .close').click(function(event){
    event.preventDefault();
    $('#layer').fadeOut();
});


// 윈도우 팝업
$('.window').click(function(event){
    event.preventDefault();
    window.open("popup.html", "pop-up", "width=900,height=625,left=100,top=200");
})



// 라이트갤러리 (썸네일)
// 🟪6)lightgallery사이트 Initialize 내용 복붙
lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgThumbnail],
    speed: 500,
});