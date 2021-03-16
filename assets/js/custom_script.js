(function() {
    window.onresize = displayWindowSize;
    window.onload = displayWindowSize;

    function displayWindowSize() {
        let myWidth = window.innerWidth;

        if (myWidth > 767) {
            $(".mail-address").css("display","block");
            $(".mail-address3").css("display","none");
            $("#top-link").removeClass("mt-3");
            $("#top-link").addClass("mt-4");
            $("#intro-link").removeClass("mt-3");
            $("#intro-link").addClass("mt-4");
            $("#project-link").removeClass("mt-3");
            $("#project-link").addClass("mt-4");
            $("#contact-link").removeClass("mt-3");
            $("#contact-link").addClass("mt-4");
        } else {
            $(".mail-address").css("display","none");
            $(".mail-address3").css("display","block");
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