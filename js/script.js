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

// ,header>.nav 아코디언 효과
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
    }
  });
// ,header>.nav 아코디언 효과//끝

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
var $tab = $('div.tabMenu>.tabGroup>li'),
    $sub = $('div.tabMenu>.subGroup>div'),
    $tab2 = $('div.sub1 .tabGroup2>li'),
    $sub2 = $('div.sub1 .subGroup2>div'),
    $tab3 = $('div.sub1 .tabGroup3>li'),
    $sub3 = $('div.sub1 .subGroup3>div'),
    $tab4 = $('div.sub1 .tabGroup4>li'),
    $sub4 = $('div.sub1 .subGroup4>div'),
    i = 0;

$tab.click(function(){ //대분류 탭 효과
  i = $(this).index();
  $sub.hide();
  $sub.eq(i).show();
  $('.tabGroup>li*').removeClass('clicked2');
  $(this).addClass('clicked2');
  $('.tabGroup2').find('li:first').addClass('clicked2');
});

$tab2.click(function(){ //소분류 탭 효과
  $('.hideTab').hide();
  i = $(this).index();
  $sub2.hide();
  $sub2.eq(i).show();
  $('.tabGroup2>li*').removeClass('clicked3');
  $(this).addClass('clicked3');
});

$tab3.click(function(){ //소분류 탭 효과
  $('.hideTab').hide();
  i = $(this).index();
  $sub3.hide();
  $sub3.eq(i).show();
  $('.tabGroup3>li*').removeClass('clicked4');
  $(this).addClass('clicked4');
  $('.tabGroup4').find('li:first').addClass('clicked5');
});

$tab4.click(function(){ //소분류 탭 효과
  $('.hideTab').hide();
  i = $(this).index();
  $sub4.hide();
  $sub4.eq(i).show();
  $('.tabGroup4>li*').removeClass('clicked5');
  $(this).addClass('clicked5');
});

// section>.tapMenu 효과//끝

//미션현황 접기
var $close = $('div.mission .close'),
    $open = $('div.mission .open');

$close.click(function(){
  var dp = $(this).prev().css('display');
  if(dp == 'block'){
    $open.slideUp();
  }else if(dp == 'none'){
    $open.slideDown();
  }
});
//미션현황 접기//끝

//필터

//카드
    //카드 즐겨찾기
    $('.card .view .mark').on('click', function(){
        if()

        $(this).addClass('color');
        $(this).removeClass('color');
    });

    //카드삭제
    $('.card .view .delete').on('click', function(){
		$(this).parentsUntil('div.cardWrap').css({display: 'none'});
	});
    //카드삭제 //끝
});
