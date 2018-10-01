var playing = false;
$(document).ready(function () {
    if (isiOS) { 
        $(".controls").css("display", "none");
    }
    // alert($(window).height() + " " + $("header").height() + " " + $(".controls").height())
    // $("video").css("max-height", $(window).height() - $("header").height() - $(".controls").height() - 50 + "px");
    $("video").css("width", $(window).width() * 0.9 + "px");
    var movie = document.getElementById("video");
    movie.play();
    playing = true;
    $("#play").css("background-image", "url(src/img/pause.SVG)");
    $("#vol").val(movie.volume * 100);
    $("#play").click(function () {
        if (playing) {
            movie.pause();
            playing = false;
            $("#play").css("background-image", "url(src/img/play.SVG)");
        } else {
            movie.play();
            playing = true;
            $("#play").css("background-image", "url(src/img/pause.SVG)");
        }
    });
    $("#vol").change(function () {
        movie.volume = $("#vol").val() / 100;
    });
});