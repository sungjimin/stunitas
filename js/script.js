// script.js
$(function(){
  //header 메뉴 클릭시 addClass.clicked(컬러 바뀌는 부분)입니다.
  $('ul.list>li').on('click', function(){
        $('*').removeClass('now');
        $(this).addClass('now');
    });
  $('nav>.menu').on('click', function(){
          $('*').removeClass('clicked selected');
          $(this).addClass('clicked').find('div').addClass('selected');
      });
  //header 메뉴 클릭시 addClass.clicked입니다//

// section>.nav 아코디언 효과
var $gnb = $('div.nav .gnb');
var $lnb = $('div.nav .close .lnb');

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
// section>.nav 아코디언 효과//

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
// section>.tapMenu 효과//

});
