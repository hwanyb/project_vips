$(function () {

    $(".bigtitle").children("h2").delay(1500).animate({
        left: "0px",
        opacity: '1'
    }, 500);

    $(".bigtitle").children("p").delay(1500).animate({
        right: "0px",
        opacity: '1'
    }, 500);

    $(window).scroll(function () {
        var sct = $(window).scrollTop();


        if (sct >= 150) {
            $(".titleimg").animate({
                left: "0px",
                opacity: '1'
            }, 500);
        };
        if (sct >= 200) {
            $(".title").children("h2").animate({
                left: "0px",
                opacity: '1'
            }, 500);
        };
        if (sct >= 300) {
            $(".title").children(".firsth3").animate({
                left: "0px",
                opacity: '1'
            }, 500);
        };
        if (sct >= 400) {
            $(".title").children("h4").animate({
                left: "0px",
                opacity: '1'
            }, 500);
        };
        if (sct >= 500) {
            $(".title").children(".secondh3").animate({
                left: "0px",
                opacity: '1'
            }, 500);
        };
        if (sct >= 800) {
            $(".art1").children("h3").animate({
                left: "0px",
                opacity: '1'
            }, 500);
        };
        if (sct >= 900) {
            $(".art1").children("p").animate({
                left: "0px",
                opacity: '1'
            }, 500);
        };
        if (sct >= 1200) {
            $(".art2").children("h3").animate({
                right: "0px",
                opacity: '1'
            }, 500);
        };

        if (sct >= 1300) {
            $(".art2").children("p").animate({
                right: "0px",
                opacity: '1'
            }, 500);
        };

        if (sct >= 1600) {
            $(".art3").children("h3").animate({
                left: "0px",
                opacity: '1'
            }, 500);
        };
        if (sct >= 1700) {
            $(".art3").children("p").animate({
                left: "0px",
                opacity: '1'
            }, 500);
        };

        if (sct >= 2000) {
            $(".bottomh3").animate({
                left: "0px",
                opacity: '1'
            }, 1000);
        };
    })
})
