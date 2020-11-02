$(document).ready(function(){
    $(".menu1").click(function() {
        var $this = $(this);
        var target = $this.attr("data-target")
        var scrollPosition = $(target).offset().top;
        $("body, html").animate({scrollTop: scrollPosition}, 500);
    });

    // 햄버거 버튼 이벤트
    $('.icon').on('click',function(){
       $("#sideBar").stop().animate({left: "0"}, 600, "linear"); 
       $('#modal').fadeIn( 'linear' )
       $('html, body').css({'overflow': 'hidden', 'height': '100%'});
    });

    $('#modal').on('click',function(){
        $("#sideBar").stop().animate({left: "-100%"}, 600, "linear");
        $('#modal').fadeOut( 'linear' )
        $('html, body').css({'overflow': '', 'height': 'auto'});
     });
    
     //스크롤 발생 그래프 처리
     var set = 0;
     $(window).scroll(function(){
        var scrollT = $(this).scrollTop();
        var contentB = $('#boxB').offset().top; 

        if(scrollT >= contentB) { 
            set = 1;
            $("#photography").stop().animate({width: "94%"}, 500, "linear"); 
            $("#design").stop().animate({width: "75%"}, 1000, "linear"); 
            $("#photoshop").stop().animate({width: "50%"}, 1500, "linear"); 
        } 
        
        if(set == 0) {
            $("#photography").stop().animate({width: "0"}, 500, "linear"); 
            $("#design").stop().animate({width: "0"}, 500, "linear"); 
            $("#photoshop").stop().animate({width: "0"}, 500, "linear"); 
        }
    });

    window.onload = function(){
        setTimeout(function(){
            $('html, body').scrollTop(0);
            set = 0;
        }, 100);
    }
});
