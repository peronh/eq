$(document).ready(function() {
    $(".side-menu").on("click", function() {
        $("#mySidenav").css( {
            "width": "85vw", "transition":"width 200ms", "-webkit-transition":"width 300ms"});
        $("#filter").fadeIn(700);
        //$("body").css({"position":"fixed"});
    });
    $(".closebtn, #mySidenav a").on("click", function() {
        $("#mySidenav ").css( {
            "width": "0", "transition":"width 200ms", "-webkit-transition":"width 300ms"});
        $("#filter").fadeOut(700);
        //$("body").css({"position":"relative"});
    });



    $('.btntop').on("click", function() {

            $('html,body').animate( {
                scrollTop: 0
            }, 700);
        }
    );

    $(document).on("scroll", function() {

        if($(document).scrollTop()>600) {
            $(".btntop").show(250);
        }
        else {
            $(".btntop").hide(250);
        }
    });

    var targetWidth=1400;
    $('.desktop').on('click', function() {
            $('meta[name="viewport"]').attr('content', 'width='+targetWidth);
        }
    );
});