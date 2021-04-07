$(document).ready(function(){
    $(".btn_nav").on("click", function(){
        $(".mobile_nav").animate({
            left : "0px"
        });
    })
    $(".mobile_nav>.btn").on("click", function(){
        $(".mobile_nav").animate({
            left : "-500px"
        });
    })
    $(".mobile_nav>.depth1>li").on("click", function(){
        $(this).children(".depth2").toggle("slow")
    })
    $(".quick>ul>li").mouseenter(function(){
        $(this).find(".img").animate({
            top : "30px"
        });
    })
     $(".quick>ul>li").mouseleave(function(){
        $(this).find(".img").animate({
            top : "0px"
        });
    })
    $(".bg1").delay(4000).animate({
        left : "-280px",
        opacity : "1"
    },2000);
    $(".bg2").delay(4200).animate({
        right : "-100px",
        opacity : "1"
    },2000
                                  
                                  
                                  
    
})