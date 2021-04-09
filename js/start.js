$(document).ready(function () {

    $(".start").delay(1000).fadeOut(500);
    $(".btn_nav").on("click", function () {
        $(".mobile_nav").animate({
            left: "0px"
        });
    })
})
