$(document).ready(function(){
    $('.tab_item').click(function(){
        $('.active_tab').removeClass('active_tab');
        $(this).toggleClass('active_tab');
    })

    // collapse menu rotate
    $('.burger_menu').click(function(){
        $(this).toggleClass('burger_active');
        $('.collapse_menu').toggleClass('collapse_menu_active');
    })
})
$(document).ready(function(){
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 200) {
            $(".header").addClass("active_header");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").removeClass("active_header");
        }
    });
})


