var AURA = AURA || {};
var showMenu = false;
$(document).ready(function () {
    AURA.openNav();
    AURA.closeNav();

    $(".timeline .event").hover(
        function() {
            $('.timeline .event').removeClass('active');
            $(this).addClass('active');
        }, function() {
            $('.timeline .event').removeClass('active');
        }
    );

})

AURA.openNav = function () {
    $("body").delegate(".navbar-toggler-icon", "click", function () {
        $("#mySidenav").fadeIn(500);
        $("body").addClass('no-scroll');        
        showMenu = true;
    });
}

AURA.closeNav = function () {
    $("body").delegate(".closebtn", "click", function () {
        $("#mySidenav").fadeOut(500);
        $("body").removeClass('no-scroll');        
        showMenu = false;
    });
}

window.onscroll = function (e)
{
    var winheight = window.innerHeight || (document.documentElement || document.body).clientHeight;
    var docheight = $(document).height();
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    var trackLength = docheight - winheight;
    var pctScrolled = Math.floor(scrollTop / trackLength * 100);
    if (pctScrolled > 0) {
        //$(".navbar").addClass('stuck');
    } else {
        $(".navbar").removeClass('stuck');
    }
}