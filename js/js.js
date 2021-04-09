$(document).ready(function(){
   
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
    
    
    $(".menu1_main").on("click", function(){
        $(".menu1").toggle("fast");
    });
   $(".menu2_main").on("click", function(){
        $(".menu2").toggle("fast");
    });                               
                                  
                                  
    
})