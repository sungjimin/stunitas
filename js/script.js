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

// section>.tapMenu 효과
var $tab = $('div.tabMenu>.tabGroup>li'),
    $sub = $('div.tabMenu>.subGroup>div'),
    $tab2 = $('div.sub1>.tabGroup2>li'),
    $sub2 = $('div.sub1>.subGroup2>div');
var i = 0;

$tab.click(function(){ //대분류 탭 효과
  i = $(this).index();
  $sub.hide();
  $sub.eq(i).show();
  $('*').removeClass('clicked2');
  $(this).addClass('clicked2');
  $('.tabGroup2').find('li:first').addClass('clicked2');
});

$tab2.click(function(){ //소분류 탭 효과
  $('.hideTab').hide();
  i = $(this).index();
  $sub2.hide();
  $sub2.eq(i).show();

  $('*').removeClass('clicked3');
  $(this).addClass('clicked3');
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
});
