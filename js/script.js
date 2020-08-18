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
  $(".menu__item a").on("click", function () {
    $(".menu__item a").removeClass("active");
    $(this).addClass("active");
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
    start: 'center center',
    end: '100%',
    scrub: 5,
    toggleActions: "restart pause reverse pause"
  },
  motionPath: {
    path: "Path",
    align: "Path",
    alignOrigin: [0.5, 0.5]
  },
  duration: 3,
  ease: "none"
});
gsap.to("#Ov_2", {
  scrollTrigger: {
    trigger: "#Ov_2",
    start: 'center center',
    end: '100%',
    scrub: 5,
    toggleActions: "restart pause reverse pause"
  },
  motionPath: {
    path: "#path_2",
    align: "#path_2",
    alignOrigin: [0.5, 0.5]
  },
  duration: 3,
  ease: "none"
}); // Load the IFrame Player API code asynchronously.

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

function onYouTubePlayerAPIReady() {
  player = new YT.Player('ytplayer', {
    height: '100%',
    width: '100%',
    videoId: '668nUCeBHyY',
    events: {
      "onReady": onPlayerReady
    }
  });
}

function onPlayerReady(e) {
  e.target.playVideo();
}