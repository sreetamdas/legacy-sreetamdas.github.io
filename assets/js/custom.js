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
    var startchange = $('#top');
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

    $("#mail").hover(function () {
        openOverlay('Mail')
    }, function () {
        closeOverlay('Mail')
    });
    $("#github").hover(function () {
        openOverlay('GitHub')
    }, function () {
        closeOverlay('GitHub')
    });
    $("#linkedin").hover(function () {
        openOverlay('LinkedIn')
    }, function () {
        closeOverlay('LinkedIn')
    });
    $("#facebook").hover(function () {
        openOverlay('Facebook')
    }, function () {
        closeOverlay('Facebook')
    });
    $("#twitter").hover(function () {
        openOverlay('Twitter')
    }, function () {
        closeOverlay('Twitter')
    });


    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing');
    });

    $('#typer').typeIt({
//        strings: ["Front End Developer","Quizzer/ QuizMaster","Undergrad"," "],
        speed: 20,
//        cursorSpeed: 0,
//        breakLines: true,
//        breakDelay: 2000,
        autoStart: false
    })
    .tiType('Front End Developer, ')
//    .tiBreak()
    .tiPause(1000)
    .tiType('<a href="#" class="special" style="color: black">Quizzer</a> and ')
    .tiPause(1000)
    .tiDelete(4)
    .tiPause(1000)
    .tiType('YOLOLOLOLO')
    .tiBreak()
    .tiPause(1000)
    .tiType('Undergrad Student at <a href="#" class="special" style="color: black">NIT Warangal</a>');
});
