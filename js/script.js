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

// section의 .nav 아코디언 효과
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
// section의 .nav 아코디언 효과//
});
