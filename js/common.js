$(document).ready(function() {
  // 메뉴열기 클릭
  $('.nav .btn_open').on('click', function () {
    $(this).next().css({visibility: 'visible'}).stop().animate({right: 0}, function () {
      $(this).find('a').first().focus();
    });
  });

  // 메뉴에서 닫기를 누르기 전에는 포커스가 외부로 나가지 못하게 제한
  $('#gnb a').first().on('keydown', function (e) {
    const key = e.keyCode;
    if (e.shiftKey && key === 9) {
      e.preventDefault();
      $('.nav .btn_close').focus();
    }
  });
  $('#gnb button').on('keydown', function (e) {
    const key = e.keyCode;
    if (!e.shiftKey && key === 9) {
      e.preventDefault();
      $('#gnb a').first().focus();
    }
  });


  // 메뉴 닫기 클릭
  $('.nav .btn_close').on('click', function () {
    $(this).parent().stop().animate({right: '-22%'}, function () {
      $(this).css({visibility: 'hidden'});
      $('.nav .btn_open').focus();
    });
  });

  $("#gnb ul li a").on('click', function () {
    const tgNum = $(this).parent().index();
    const $tg =  $('#container section').eq(tgNum);

    $('#gnb').stop().animate({right: '-22%'}, function () {
      $(this).css({visibility: 'hidden'});
    });

    $('html, body').stop().animate({scrollTop: $tg.offset().top});

    return false;
  });
});