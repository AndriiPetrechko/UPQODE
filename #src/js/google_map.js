function initMap() {

    // The map, centered at city
    const map = new google.maps.Map(
        document.getElementById('map'), {zoom: 11, center: current_city}
    );
    const marker = new google.maps.Marker({position: current_city, map: map});
}

// The location of city
const LosAngeles = {lat: 34.072789, lng: -118.346705};
const NewYork = {lat: 40.718484, lng: -73.900724};
const Boston = {lat: 42.338251, lng: -71.093029};
const Detroit = {lat: 42.357764, lng: -83.060068};
var current_city = {lat: 34.072789, lng: -118.346705};

// change current city on the map
var city = '';
 
    $(".city_box").on("click", function() {
        $(".city_box").removeClass("active_city");
        $(this).addClass("active_city");
        city = this.id;
        console.log('you change city: ' + city);
        $(".info_title").text(function(){
            return city;
        });
        if (city == "LosAngeles"){
            current_city = {lat: 34.072789, lng: -118.346705};
        } else if (city == "NewYork"){
            current_city = {lat: 40.718484, lng: -73.900724};
        } else if (city == "Boston"){
            current_city = {lat: 42.338251, lng: -71.093029};
        } else if (city == "Detroit"){
            current_city = {lat: 42.357764, lng: -83.060068};
        }
        initMap().center=current_city;
    });

   

    
