$(function () {
    $("#homeNav").addClass('active');
    // ADD ACTIVE - UP TO DOWN
    $("#home").waypoint(function () {
        $("#homeNav").addClass('active');
    }, {
        offset: '-1%'
    })

    $("#about").waypoint(function () {
        // $('#snow-encore').toggleClass('fade');
        $("#homeNav").removeClass('active');
        $("#aboutNav").addClass('active');
        $("#portfolioNav").removeClass('active');
        $("#contactNav").removeClass('active');
    }, {
        offset: '2%'
    })
    $("#portfolio").waypoint(function () {
        $("#homeNav").removeClass('active');
        $("#aboutNav").removeClass('active');
        $("#portfolioNav").addClass('active');
        $("#contactNav").removeClass('active');
    }, {
        offset: '2%'
    })
    $("#contact").waypoint(function () {
        $("#homeNav").removeClass('active');
        $("#aboutNav").removeClass('active');
        $("#portfolioNav").removeClass('active');
        $("#contactNav").addClass('active');
    }, {
        offset: '30%'
    })

    // ADD ACTIVE - FROM DOWN TO UP

    $("#home-end").waypoint(function () {
        $("#homeNav").addClass('active');
        $("#aboutNav").removeClass('active');
    }, {
        offset: '50%'
    })

    $("#about-end").waypoint(function () {
        $("#aboutNav").addClass('active');
        $("#portfolioNav").removeClass('active');
    }, {
        offset: '50%'
    })

    $("#portfolio-end").waypoint(function () {
        $("#portfolioNav").addClass('active');
        $("#contactNav").removeClass('active');
    }, {
        offset: '50%'
    })
    // ANIMATION

    // NAVBAR MENU COLLAPSE AFTER CLICKING AN OPTION ON SMALL SCREENS
    $('.navbar-collapse ul li a').click(function () {
        $(".navbar-collapse").collapse('hide');
    });

    //ENTRANCE ON SCROLL ANIMATION 

    $("#about").waypoint(function () {
        $(".entranceRight").toggleClass('fade');
        if ($(".entranceRight").hasClass('fade')) {
            $(".entranceRight").removeClass(' fadeInLeft');
            $(".entranceRight").addClass(' fadeOutLeft');
        } else {
            $(".entranceRight").addClass(' fadeInLeft');
            $(".entranceRight").removeClass(' fadeOutLeft');
        }
    }, {
        offset: '50%'
    });

    $("#about").waypoint(function () {
        $(".entranceLeft").toggleClass('fade');
        if ($(".entranceLeft").hasClass('fade')) {
            $(".entranceLeft").removeClass('fadeInRight');
            $(".entranceLeft").addClass(' fadeOutRight');
        } else {
            $(".entranceLeft").addClass(' fadeInRight');
            $(".entranceLeft").removeClass(' fadeOutRight');
        }
    }, {
        offset: '50%'
    });

    // SNOW
    $("#about").waypoint(function () {
        $('#snow-encore').toggleClass('fade');
        $('.lead').toggleClass('fade');

    }, {
        offset: '60%'
    })
    // EXIT ON SCROLL ANIMATION 
    // $("#about-end").waypoint(function () {
    //     $(".entranceRight").removeClass(' fadeInLeft');
    //     $(".entranceRight").addClass(' fadeOutLeft');
    // $(".entranceRight").addClass('hide');
    // }, {
    //     offset: '80%'
    // });

    // $("#about-end").waypoint(function () {
    //     $(".entranceLeft").removeClass(' fadeInRight');
    //     $(".entranceLeft").addClass(' fadeOutRight');
    // }, {
    //     offset: '70%'
    // });








    // $(".entranceUp").waypoint(function () {
    //     $(".entranceUp").addClass('animated fadeInUp');
    // }, {
    //     offset: '50%'
    // });

    // $(".entranceContactLeft").css('opacity', 0);

    // $(".entranceContactLeft").waypoint(function () {
    //     $(".entranceContactLeft").addClass('animated fadeInLeft');
    // }, {
    //     offset: '50%'
    // });

    // $(".entranceContactRight").css('opacity', 0);

    // $(".entranceContactRight").waypoint(function () {
    //     $(".entranceContactRight").addClass('animated fadeInRight');
    // }, {
    //     offset: '50%'
    // });

});