$(document).ready(function() {
  
  // 본문2 초기 설정
  $('#content2 .pagenation li:first').addClass('on');
  $('#content2 .cnt2_txt > .txt1').addClass('selected');
  $('#content2 .bg div:first').addClass('view');

  // 본문2 오른쪽 페이지 네이션 클릭
  $('#content2 .pagenation button').on('click', function () {
    const tgNum = $(this).parent().index();
    
    $(this).parent().addClass('on').siblings().removeClass('on');
    $('#content2 .cnt2_txt > div').eq(tgNum).addClass('selected').siblings().removeClass('selected');
    $('#content2 .bg div').eq(tgNum).addClass('view').siblings().removeClass('view');
  });

  $(window).on('scroll', function () {
    const scrollY = $(window).scrollTop();
    const cnt2Y = $('#content2').offset().top;
    const cnt2Hei = $(this).height();

    // 본문2에서 스크롤 될때 : 본문2의 시작에서는 .txt1을 활성화 / 50픽셀 이상 움직이면 .txt2를 활성화
    if (scrollY >= cnt2Y && scrollY < cnt2Y + 50) {
      $('#content2 .pagenation li').eq(0).children().click();
    }
    else if (scrollY >= cnt2Y + 50 && scrollY < cnt2Y + cnt2Hei) {
      $('#content2 .pagenation li').eq(1).children().click();
    } 
  });
});