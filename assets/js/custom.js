$(document).ready(function () {
    function openNav() {
        document.getElementById("myNav").style.width = "100%";
    }

    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
    }

    function openSocial(that) {
        $('#' + that).css('display', 'block');
    }

    function closeSocial(that) {
        $('#' + that).css('display', 'none');
    }

    var scroll_start = 0;
    var startchange = $('#fullscreen');
    var offset = startchange.offset();
    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $("#header").css('display', 'block');
            } else {
                $('#header').css('display', 'none');
            }
        });
    }

    function openOverlay(that) {
        openNav();
        openSocial(that);
    }

    function closeOverlay(that) {
        closeNav();
        closeSocial(that);
    }

    //

    $("#github").hover(function () {openOverlay('GitHub')}, function () {closeOverlay('GitHub')});
    $("#linkedin").hover(function () {openOverlay('LinkedIn')}, function () {closeOverlay('LinkedIn')});
    $("#facebook").hover(function () {openOverlay('Facebook')}, function () {closeOverlay('Facebook')});
    $("#twitter").hover(function () {openOverlay('Twitter')}, function () {closeOverlay('Twitter')});


    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing');
    });
});
