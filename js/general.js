$(window).on("scroll", function() {
    if(window.pageYOffset >= 40) {
        $(".scroll-to-top").css("visibility", "visible");
    }
    else {
        $(".scroll-to-top").css("visibility", "hidden");
    }
})
$(document).ready(function() {
    $(".scroll-to-top").click(function() {
        window.scrollTo(0,0);
    })
})

$(document).ready(function() {
    $(".item").click(function() {
        url = "https://nhnn3106.github.io/BaiTapLon_WithBootstrap5/html/san-pham.html";
        $(location ).attr("href", url);
    })
})
