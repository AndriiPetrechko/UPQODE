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

    $(".menu__item a").on("click", function() {
        $(".menu__item a").removeClass("active");
        $(this).addClass("active");
      });

    $(".collapse_menu_item").click(function(){
        $('.collapse_menu').removeClass('collapse_menu_active');
        $('.burger_menu').removeClass('burger_active');
    })
})