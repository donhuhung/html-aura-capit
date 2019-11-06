$(document).ready(function () {
    window.onscroll = function (e)
    {
        var winheight = window.innerHeight || (document.documentElement || document.body).clientHeight;
        var docheight = $(document).height();
        var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
        var trackLength = docheight - winheight;
        var pctScrolled = Math.floor(scrollTop / trackLength * 100);
        if(pctScrolled >0){
            //$(".navbar").addClass('stuck');
        }
        else{
            $(".navbar").removeClass('stuck');
        }
    }
})