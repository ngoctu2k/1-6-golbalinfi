$(window).on('load',function(event){
    $('body').removeClass('preloading');
    $('.load').delay(1000).fadeOut('fast');
});
$(document).ready(function () {
    $(".site-close-handle").click(function () {
        $(".nav-mobile").removeClass("open-menu-mobile");
    });
    $(".button-humberger-mobile").click(function () {
        $(".nav-mobile").addClass("open-menu-mobile");
    });
    $(".button-search-header").click(function () {
        $(".form-search-header").toggleClass("form-search-header-active");
        $(".input-search-header").toggleClass("input-search-header-active");
        $(".button-search-header").toggleClass("button-search-header-active");
        
    });


$(".subnav-children").slideUp();
$(".icon-subnav").click(function () {
    if ($(".subnav-children").hasClass("subnav-children-active")) {
        $(".subnav-children").removeClass("subnav-children-active").slideUp();
        $(".icon-subnav").removeClass("icon-subnav-active");
    } else {
        $(this).next(".subnav-children").addClass("subnav-children-active").slideDown();
        $(this).addClass("icon-subnav-active");
    }
});
});
