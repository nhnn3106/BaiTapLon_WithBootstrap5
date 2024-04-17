$(document).ready(function() {
    $("#he-thong-cua-hang-btn").click(function() {
        $(".gray-background").css("display", "block");
        $(".he-thong-cua-hang").css("display", "block");
    })
    $(".close-btn-he-thong-cua-hang").click(function() {
        $(".gray-background").css("display", "none");
        $(".he-thong-cua-hang").css("display", "none");
    })
});
$(window).on("scroll",function() {
    if(window.pageYOffset >= 40) {
        $(".second-header").css("position","fixed");
        $(".second-header").css("top","0px");
    }
    else {
        $(".second-header").css("position","");
        $(".second-header").css("top","40px");
    }
});

$(document).ready(function() {
    $(".search-btn").click(function() {
        $(".gray-background").css("display", "block");
        $(".tim-kiem").css("display", "block");
    })
    $(".tim-kiem-close-btn").click(function() {
        $(".gray-background").css("display", "none");
        $(".tim-kiem").css("display", "none");
    })
})