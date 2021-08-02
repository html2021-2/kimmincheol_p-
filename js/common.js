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
});

$(document).ready(function() {
  /* 
    1) 첫번째 .header과 .panel(tabIndex 0) 활성화 (클래스 .on 추가)
    aria의 state 초기 설정
    2) 키보드 제어 - 상단방향키, 하단방향키, home, end, enter/spacebar(click 이벤트가 대신 함)
    3) 마우스 제어 - 클릭이벤트
    4) 아코디언 헤더가 focus, blur => .accordion.focus제어
  */
 
  const $acdn = $('.accordion');
  // 1) 초기 설정 : 첫번째 .header(aria의 state)과 .panel(tabIndex 0) 활성화 => 클래스 .on 추가
  // 1-1 아코디언 헤더
  $acdn.find('.tit:first-of-type .header').addClass('on').attr({'aria-expanded': true, 'aria-disabled': true}).parent().siblings('.tit').children().attr({'aria-expanded': false});
  // 1-2) 아코디언 패널
  $acdn.find('.panel:first-of-type').addClass('on').attr({tabIndex: 0});

  // 2) 키보드 제어 - 상단방향키(38), 하단방향키(40), home(36), end(35), enter/spacebar(click 이벤트가 대신 함)
  $acdn.find('.header').on('keydown', function (e) {
    const key = e.keyCode;
    console.log(key);
    switch (key) {
      case 38:  //상단방향키
        if ($(this).is('.first')) {
          $(this).closest('.accordion').find('.last').focus();
        } else {
          $(this).parent().prev().prev().children().focus();
        }
        break;
      case 40:  //하단방향키
        if ($(this).is('.last')) {
          $(this).closest('.accordion').find('.first').focus();
        } else {
          $(this).parent().next().next().children().focus();
        }
        break;
      case 36: //home
        e.preventDefault();
        $(this).closest('.accordion').find('.first').focus();
        break;
      case 35: //end
        e.preventDefault();
        $(this).closest('.accordion').find('.last').focus();
        break;
    }
  });

  // 3) 마우스 제어 - 클릭이벤트 => 열려지지 않은 버튼만 클릭할수 있음
  // 버튼이 열려진 여부는 .header.on 아코디언헤더가 클래스on을 갖는지 확인
  $acdn.find('.header').on('click', function () {
    if (!$(this).is('.on')) {
      // 3-1) 아코디언 헤더 : 선택되어진 버튼은 활성화 / 나머지 버튼은 비활성화
      $(this).addClass('on').attr({'aria-expanded': true, 'aria-disabled': true}).parent().siblings('.tit').children().removeClass('on').attr({'aria-expanded': false}).removeAttr('aria-disabled');
      // 3-2) 아코디언 패널
      $(this).parent().next().addClass('on').attr({tabIndex: 0}).siblings('.panel.on').removeClass('on').attr({tabIndex: -1});
    }
  });

  // 4) 아코디언 헤더가 focus, blur => .accordion.focus제어
  $acdn.find('.header').on({
    focus: function () {
      $(this).closest('.accordion').addClass('focus');
    },
    blur: function () {
      $(this).closest('.accordion').removeClass('focus');
    }
  });

});