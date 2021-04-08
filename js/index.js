$(function () {

    $(window).scroll(function () {
        var scrollValue = $(document).scrollTop();
        console.log(scrollValue);
    });
    $(".sec1").find(".title").delay(1200).animate({
        left: "0px",
        opacity: "1"
    });
    $(".sec1").find(".stitle").delay(1200).animate({
        right: "0px",
        opacity: "1"
    });



    $(window).scroll(function () {
        var sct = $(window).scrollTop();
        
        if(sct >= 600){
            $(".sec2").find(".title").animate({
                top : "0px",
                opacity : "1"
            },500)
        };
        
        if(sct >= 1750){
            $(".sec3").find(".title").animate({
                top : "0px",
                opacity : "1"
            },500)
        };
        
        if(sct >= 3300){
            $(".sec4").find(".title").animate({
                top : "0px",
                opacity : "1"
            },500)
        };
        if(sct >= 3300){
            $(".sec4").find(".stitle").delay(100).animate({
                top : "0px",
                opacity : "1"
            },500)
        };
        if(sct >= 3400){
            $(".sec4").find(".sec4Li1").animate({
                top : "0px",
                opacity : "1"
            },500)
        };
        
        if(sct >= 3400){
            $(".sec4").find(".sec4Li2").delay(250).animate({
                top : "0px",
                opacity : "1"
            },500)
        };
        if(sct >= 3400){
            $(".sec4").find(".sec4Li3").delay(500).animate({
                top : "0px",
                opacity : "1"
            },500)
        };
        
        if(sct >= 4200){
            $(".sec5").find(".title").animate({
                top : "0px",
                opacity : "1"
            },500)
        };
        if(sct >= 4200){
            $(".sec5").find(".stitle").delay(100).animate({
                top : "0px",
                opacity : "1"
            },500)
        };
        if(sct >= 4400){
            $(".sec5").find(".cjone").delay(100).animate({
                left : "0px",
                opacity : "1"
            },1000)
        };
        
        
        if (sct >= 1700) {

            $(".bg1").animate({
                left: "-280px",
                opacity: "1"
            }, 1000);
        };
        if (sct >= 2000) {

            $(".bg2").animate({
                right: "-100px",
                opacity: "1"
            }, 1000);
        };
    });



})
