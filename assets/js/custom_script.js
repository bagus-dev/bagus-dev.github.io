(function() {
    window.onresize = displayWindowSize;
    window.onload = displayWindowSize;

    function displayWindowSize() {
        let myWidth = window.innerWidth;

        if (myWidth > 767) {
            $(".btn-pc").css("display","block");
            $(".btn-mobile").css("display","none");
            $(".foto-pribadi").addClass("img-fluid");
            $("#center-img").css("display","none");
            $("#img-bagus").css("display","block");
            $(".text-1").removeClass("text-center");
            $(".text-2").removeClass("text-center");
            $("#top-link").removeClass("mt-3");
            $("#top-link").addClass("mt-4");
            $("#intro-link").removeClass("mt-3");
            $("#intro-link").addClass("mt-4");
            $("#project-link").removeClass("mt-3");
            $("#project-link").addClass("mt-4");
            $("#contact-link").removeClass("mt-3");
            $("#contact-link").addClass("mt-4");
        } else {
            $(".btn-pc").css("display","none");
            $(".btn-mobile").css("display","block");
            $(".foto-pribadi").removeClass("img-fluid");
            $("#center-img").css("display","block");
            $("#img-bagus").css("display","none");
            $(".text-1").addClass("text-center");
            $(".text-2").addClass("text-center");
            $("#top-link").removeClass("mt-4");
            $("#top-link").addClass("mt-3");
            $("#intro-link").removeClass("mt-4");
            $("#intro-link").addClass("mt-3");
            $("#project-link").removeClass("mt-4");
            $("#project-link").addClass("mt-3");
            $("#contact-link").removeClass("mt-4");
            $("#contact-link").addClass("mt-3");
        }
    }
})();