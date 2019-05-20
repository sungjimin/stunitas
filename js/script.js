// script.js
$(function(){
  $('ul.list>li').on('click', function(){
        $('*').removeClass('clicked');
        $(this).addClass('clicked');
    });
    $('nav>.menu').on('click', function(){
          $('*').removeClass('clicked');
          $(this).addClass('clicked');
      });
    $('.menu>div').on('click', function(){
            $('*').removeClass('selected');
            $(this).addClass('selected');
      });
});
