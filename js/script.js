var piesiteFired = 0;
$(document).ready(function() {
    var $win = $(window),
        $win_height = $(window).height(),
        windowPercentage = $(window).height() * 0.9;
    $win.on("scroll", scrollReveal);
    function scrollReveal() {
        var scrolled = $win.scrollTop();
        $(".trigger").each(function() {
            var $this = $(this),
                offsetTop = $this.offset().top;
            if (
                scrolled + windowPercentage > offsetTop ||
                $win_height > offsetTop
            ) {
                $(this).each(function(key, bar) {
                    var percentage = $(this).data("percentage");
                    $(this).css("height", percentage + "%"); 
                    $(this).prop("Counter", 0).animate(
                        {
                            Counter: $(this).data("percentage")
                        },
                        {
                            duration: 2000,
                            easing: "swing",
                            step: function(now) {
                                $(this).text(Math.ceil(now));
                            }
                        }
                    );
                });
            } else {
                $(this).each(function(key, bar) {
                    $(this).css("height", 0);
                });
            }    
            
        });
    }
    scrollReveal();
});

$('.has-animation').each(function(index) {
    if($(window).scrollTop() + $(window).height() > $(this).offset().top + $(this).outerHeight() ){ 
        $(this).delay($(this).data('delay')).queue(function(){
            $(this).addClass('animate-in');
      });    
    }   
});  


$(window).scroll(function() { 
$('.has-animation').each(function(index) {
    if($(window).scrollTop() + $(window).height() > $(this).offset().top ){ 
        $(this).delay($(this).data('delay')).queue(function(){
            $(this).addClass('animate-in');
      });    
    }   
});   
});



