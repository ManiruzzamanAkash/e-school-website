$(document).ready(function(){
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 200) {
            $("#head .navbar").addClass("scroll");
        } else {
            $("#head .navbar").removeClass("scroll");
        }
    });
});