$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
        console.log("OK");
    } else {
        $('.nav').removeClass('affix');
    }

    var scroll = $(window).scrollTop();
    if (scroll > 500) {
        var video = document.getElementById("myVideo");
        video.pause();
        console.log(scroll)
        $('#myVideo').css({
            filter: "blur(" + (10) + "px)"
        }) 
    } else {
        var video = document.getElementById("myVideo");
        video.play();
        $('#myVideo').css({
            filter: "none"
        })

    }
    



});


