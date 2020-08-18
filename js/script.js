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
});

function initMap() {
  // The map, centered at city
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: current_city
  });
  var marker = new google.maps.Marker({
    position: current_city,
    map: map
  });
} // The location of city


var LosAngeles = {
  lat: 34.072789,
  lng: -118.346705
};
var NewYork = {
  lat: 40.718484,
  lng: -73.900724
};
var Boston = {
  lat: 42.338251,
  lng: -71.093029
};
var Detroit = {
  lat: 42.357764,
  lng: -83.060068
};
var current_city = {
  lat: 34.072789,
  lng: -118.346705
}; // change current city on the map

var city = '';
$(".city_box").on("click", function () {
  $(".city_box").removeClass("active_city");
  $(this).addClass("active_city");
  city = this.id;
  console.log('you change city: ' + city);
  $(".info_title").text(function () {
    return city;
  });

  if (city == "LosAngeles") {
    current_city = {
      lat: 34.072789,
      lng: -118.346705
    };
  } else if (city == "NewYork") {
    current_city = {
      lat: 40.718484,
      lng: -73.900724
    };
  } else if (city == "Boston") {
    current_city = {
      lat: 42.338251,
      lng: -71.093029
    };
  } else if (city == "Detroit") {
    current_city = {
      lat: 42.357764,
      lng: -83.060068
    };
  }

  initMap().center = current_city;
});