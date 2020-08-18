"use strict";

$(document).ready(function () {
  $('.tab_item').click(function () {
    $('.active_tab').removeClass('active_tab');
    $(this).toggleClass('active_tab');
  }); // collapse menu rotate

  $('.burger_menu').click(function () {
    $(this).toggleClass('burger_active');
    $('.collapse_menu').toggleClass('collapse_menu_active');
  });
});
$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 200) {
      $(".header").addClass("active_header");
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      $(".header").removeClass("active_header");
    }
  });
});
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);
gsap.to("#Ov", {
  scrollTrigger: {
    trigger: "#Ov",
    start: "top center",
    end: "top 100px",
    scrub: 5
  },
  motionPath: {
    path: "Path",
    align: "Path",
    alignOrigin: [0.5, 0.5]
  },
  duration: 3,
  ease: "none"
});