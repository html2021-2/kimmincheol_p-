$(document).ready(function() {
  let current = 0;
  $('.controls .prev').addClass('disabled').attr({tabIndex: -1});
  $('#item2').attr({'aria-hidden': true, inert: ''});

  // 인덱스에서 2차 프로젝트를 클릭한 경우
  console.log(location.search); //?category=
  console.log(location.href);   //~~~project.html?category=#item2
  if (location.search) {
    let category =  location.href.indexOf(location.search);
    category = location.href.slice(category+10);
    console.log(category);
    if (category === '#item2') {
      setTimeout(function () {
        $('.controls .next').click();
      }, 200);
    }
  }

  $('.controls button').on('click', function () {
    if ($('.item_wrap').is(':animated')) return false;

    const btnNum = $(this).index();
    if (btnNum === 0) { // 이전
      if (current === 1){
        $('html, body').stop().animate({scrollTop: 0}, 'fast', function () {
          $('.item_wrap').stop().animate({marginLeft: 0}, function () {
            $('#item1').removeAttr('aria-hidden inert').siblings().attr({'aria-hidden': true, inert: ''});
          });
        });
        current--;
        $('.controls .prev').addClass('disabled').attr({tabIndex: -1}).siblings().removeClass('disabled').removeAttr('tabIndex');
        console.log(current);
      }
    } else { //다음
      if (current === 0){
        $('html, body').stop().animate({scrollTop: 0}, 'fast', function () {
          $('.item_wrap').stop().animate({marginLeft: '-100%'}, function () {
            $('#item2').removeAttr('aria-hidden inert').siblings().attr({'aria-hidden': true, inert: ''});
          });
        });
        current++;
        $('.controls .next').addClass('disabled').attr({tabIndex: -1}).siblings().removeClass('disabled').removeAttr('tabIndex');
        console.log(current);
      }
    }
  });

  $('#content .top .btn button').on('click', function () {
    const pos = $('.btm').offset().top;
    $('html, body').stop().animate({scrollTop: pos});
  });
});
