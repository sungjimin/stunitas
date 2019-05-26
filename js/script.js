// script.js
$(function(){
//header>topMenu 클릭시 addClass.clicked(언더라인)입니다.
  $('ul.listWrap>li').on('click', function(){
        $('ul.listWrap>li*').removeClass('clicked');
        $(this).addClass('clicked');
    });
//header>topMenu 클릭시 addClass.clicked(언더라인)입니다.//끝

//header 메뉴 클릭시 addClass.clicked(컬러 바뀌는 부분)입니다.
  $('nav>.menu').on('click', function(){
          $('nav>.menu>li*').removeClass('clicked selected');
          $(this).addClass('clicked').find('li').addClass('selected');
      });
  //header 메뉴 클릭시 addClass.clicked입니다//끝

  // header>.nav 마우스오버 효과
  $('.wrap>header>nav>.open').on('mouseenter', function(){
      $('div.navIcon').css({display:'block'});
      $(this).on('mouseleave', function(){
          $('div.navIcon').css({display:'none'});
      });
  });
  // header>.nav 마우스오버 효과//끝

// header>.nav 아코디언 효과
var $gnb = $('header>nav .gnb');
var $lnb = $('header>nav .close .lnb');

$lnb.css('display', 'none');
$gnb.click(function(){
  var dp = $(this).next().css('display');
  if(dp == 'none'){
      $lnb.slideUp();
      $(this).next().slideDown();
    }else if(dp == 'block'){
      $(this).next().slideUp();
      $('div.navIcon').css({display:'block'})
    }
  });
// header>.nav 아코디언 효과//끝

// 공지사항 슬라이딩
$('section .notice header i').click(nextNtc);
    function nextNtc(){
        $('section .notice .segWrap').animate({marginTop : -20},3000, 'linear', function(){
            $('section>.notice>.segWrap').css({marginTop : 0});
            $('section>.notice>.segWrap div').first().appendTo('section>.notice>.segWrap');
        });
    }
    nextNtc();
    setInterval(nextNtc, 3000);
// 공지사항 슬라이딩 //끝

// section>.tapMenu 효과
var $tab = $('section div.tabMenu>.tabGroup>li'),
    $sub = $('section div.tabMenu>.subGroup>div'),

    $tabCa = $('.content.academy div.tabMenu>.tabGroup>li'),
    $subCa = $('.content.academy div.tabMenu>.subGroup>div'),

    $tabCt = $('.content.test div.tabMenu>.tabGroup>li'),
    $subCt = $('.content.test div.tabMenu>.subGroup>div'),

    $tab2 = $('div.sub1 .tabGroup2>li'),
    $sub2 = $('div.sub1 .subGroup2>div'),

    $tab3 = $('div.sub1 .tabGroup3>li'),
    $sub3 = $('div.sub1 .subGroup3>div'),

    $tab4 = $('div.sub1 .tabGroup4>li'),
    $sub4 = $('div.sub1 .subGroup4>div'),

    i = 0;

$tab.click(function(){ //대분류 탭 효과 content internet
  i = $(this).index(); //(인터넷강의/학원강의/모의고사/첨삭)
  $sub.hide();
  $sub.eq(i).show();
  $('section .tabGroup>li*').removeClass('clicked2');
  $(this).addClass('clicked2');
  $('section .tabGroup2').find('li:first').addClass('clicked2');
});

//스크롤 하단부분의 content영역 탭 별도 적용
    $tabCa.click(function(){ //대분류 탭 효과 content academy
      i = $(this).index(); //(인터넷강의/학원강의/모의고사/첨삭)
      $subCa.hide();
      $subCa.eq(i).show();
      $('.content.academy .tabGroup>li*').removeClass('clicked2');
      $(this).addClass('clicked2');
      $('.content.academy .tabGroup2').find('li:first').addClass('clicked2');
    });

    $tabCt.click(function(){ //대분류 탭 효과 content test
      i = $(this).index(); //(인터넷강의/학원강의/모의고사/첨삭)
      $subCt.hide();
      $subCt.eq(i).show();
      $('.content.test .tabGroup>li*').removeClass('clicked2');
      $(this).addClass('clicked2');
      $('.content.test .tabGroup2').find('li:first').addClass('clicked2');
    });
//스크롤 하단부분의 content영역 탭 별도 적용//끝

$tab2.click(function(){ //소분류 탭 효과
  $('.hideTab').hide(); //(환급반/프리패스/일반강좌/즐겨찾기)
  i = $(this).index();
  $sub2.hide();
  $sub2.eq(i).show();
  $('.tabGroup2>li*').removeClass('clicked3');
  $(this).addClass('clicked3');
});

$tab3.click(function(){ //소분류 탭 효과
  $('.hideTab').hide(); //(전체/노무사/법무사)
  i = $(this).index();
  $sub3.hide();
  $sub3.eq(i).show();
  $('.tabGroup3>li*').removeClass('clicked4');
  $(this).addClass('clicked4');
  $('.tabGroup4').find('li:first').addClass('clicked5');
});

$tab4.click(function(){ //소분류 탭 효과
  $('.hideTab').hide(); //(전체/영어/민법/행정학/상법)
  i = $(this).index();
  $sub4.hide();
  $sub4.eq(i).show();
  $('.tabGroup4>li*').removeClass('clicked5');
  $(this).addClass('clicked5');
});

// section>.tapMenu 효과//끝

// 펼쳐짐 or 닫힘 슬라이드 효과
var $close = $('div.mission .close'),
    $open = $('div.mission .open');

    // 미션현황 접기
$close.click(function(){
  var dp = $(this).prev().css('display');
  if(dp == 'block'){
    $open.slideUp();
  }else if(dp == 'none'){
    $open.slideDown();
  }
});
    //미션현황 접기//끝

    //학원강의 더보기란
var $upBtn = $('.cl1 .close .more'),
    $dwBtn = $('.cl1 .close .fold'),
    $close = $('.academy .cl1>.close'),
    $open = $('.academy .cl1>.open')
    $upBtn2 = $('.cl2 .close .more'),
    $dwBtn2 = $('.cl2 .close .fold'),
    $close2 = $('.academy .cl2>.close'),
    $open2 = $('.academy .cl2>.open');

$('.cl1>.close>.segWrap>div').click(function(){
    var dp2 = $open.css('display');
    if(dp2 == 'none'){
        $open.slideDown();
        $upBtn.hide().next().show();
    }else if(dp2 == 'block'){
        $open.slideUp();
        $upBtn.show().next().hide();
    }
});

$('.cl2>.close>.segWrap>div').click(function(){
    var dp2 = $open2.css('display');
    if(dp2 == 'none'){
        $open2.slideDown();
        $upBtn2.hide().next().show();
    }else if(dp2 == 'block'){
        $open2.slideUp();
        $upBtn2.show().next().hide();
    }
});
    //학원강의 더보기란//끝

    //모의고사 더보기란

    var $upBtn3 = $('.cl3 .close .more'),
        $dwBtn3 = $('.cl3 .close .fold'),
        $close3 = $('.test .cl3>.close'),
        $open3 = $('.test .cl3>.open')
        $upBtn4 = $('.cl4 .close .more'),
        $dwBtn4 = $('.cl4 .close .fold'),
        $close4 = $('.test .cl4>.close'),
        $open4 = $('.test .cl4>.open');

    $('.cl3>.close>div').click(function(){
        var dp2 = $open3.css('display');
        if(dp2 == 'none'){
            $open3.slideDown();
            $upBtn3.hide().next().show();
        }else if(dp2 == 'block'){
            $open3.slideUp();
            $upBtn3.show().next().hide();
        }
    });

    $('.cl4>.close>div').click(function(){
        var dp2 = $open4.css('display');
        if(dp2 == 'none'){
            $open4.slideDown();
            $upBtn4.hide().next().show();
        }else if(dp2 == 'block'){
            $open4.slideUp();
            $upBtn4.show().next().hide();
        }
    });
    //모의고사 더보기란//끝

//필터
var $gf = $('.subGroup4 .ft .gf');
var $lf = $('.subGroup4 .ft .lf');

$gf.click(function(){
  var dp = $(this).children('.lf').css('display');
  if(dp == 'none'){
      $lf.slideUp();
      $(this).children('.lf').slideDown();
    }else if(dp == 'block'){
      $(this).children('.lf').slideUp();
    }
  });
//필터//끝

//카드
    //카드 즐겨찾기
    $('.card .mark').on("click", function() {
      $(this).toggleClass('color');
  });
    //카드삭제
    $('.card .view .delete').on('click', function(){
		$(this).parentsUntil('div.cardWrap').css({display: 'none'});
	});
//카드 //끝

//scroll top
    $('.tabGroup li.top').on('click',function(){
        $('html, body').animate({scrollTop : 0});
    });
//scroll top//끝
});
