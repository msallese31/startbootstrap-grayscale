/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(this).closest('.collapse').collapse('toggle');
});

// Google Maps Scripts
var map = null;
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);
google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(new google.maps.LatLng(-33, 151));
});

function init() {
    var link = document.getElementById('map');
    // link.style.display = 'none'; //or
    // link.style.visibility = 'hidden';
    var baseDate = new Date("2/08/17")
    var d = new Date();



    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds

    var diffDays = Math.round(Math.abs((baseDate.getTime() - d.getTime())/(oneDay)));


    // var baseValue = 1;
    console.log("diffDays: " + diffDays);

    var n = d.getMonth();
    console.log("MonthNum: " + n);


    var diffStack = d.getMonth() - baseDate.getMonth()
       + (12 * (d.getFullYear() - baseDate.getFullYear()));

    console.log("diffstack: " + diffStack)
    console.log("BaseDateNum: " + baseDate.getMonth());


        if (diffDays > 0) {
    var intro = document.getElementById('intro1');
    intro.style.display = 'block'; //or
    intro.style.visibility = 'visible';
    intro.innerHTML = "Not in the form of: A house, a ring, or a car."
    } 

    if (diffStack > 0) {
    var intro = document.getElementById('intro2');
    intro.style.display = 'block'; //or
    intro.style.visibility = 'visible';
    intro.innerHTML = "In the form of: A redeemable voucher."
    }    

    if (diffStack > 1) {
    var intro = document.getElementById('intro3');
    intro.style.display = 'block'; //or
    intro.style.visibility = 'visible';
    intro.innerHTML = "Made of cotton, leather, and silk."

    }

    if (diffStack > 2) {
    var intro = document.getElementById('intro4');
    intro.style.display = 'block'; //or
    intro.style.visibility = 'visible';
    intro.innerHTML = "Hand crafted by yours truly."
    }

    if (diffStack > 3) {
    var intro = document.getElementById('intro5');
    intro.style.display = 'block'; //or
    intro.style.visibility = 'visible';
    intro.innerHTML = "Going to need to be refined before it's fully redeemable"
    }

    if (diffStack > 4) {
    var intro = document.getElementById('intro6');
    intro.style.display = 'block'; //or
    intro.style.visibility = 'visible';
    intro.innerHTML = "Going to require just one more day of waiting once it is redeemed."
    }

    if (diffStack > 5) {
    var intro = document.getElementById('intro7');
    intro.style.display = 'block'; //or
    intro.style.visibility = 'visible';
    intro.innerHTML = "Not bound to any specific point in time."
    }

    if (diffStack > 6) {
    var intro = document.getElementById('intro8');
    intro.style.display = 'block'; //or
    intro.style.visibility = 'visible';
    intro.innerHTML = "Is bound to a specific location"
    }

    if (diffStack > 7) {
    var intro = document.getElementById('intro9');
    intro.style.display = 'block'; //or
    intro.style.visibility = 'visible';
    intro.innerHTML = "Probably going to require a kayak purchase"
    }

    if (diffStack > 8) {
    var intro = document.getElementById('intro10');
    intro.style.display = 'block'; //or
    intro.style.visibility = 'visible';
    intro.innerHTML = "Check back on January 26th"
    }

    if (diffStack > 9) {
    var intro = document.getElementById('intro11');
    intro.style.display = 'block'; //or
    intro.style.visibility = 'visible';
    intro.innerHTML = "Check back on Feb 2nd"
    }

    if (diffStack > 10) {
    var intro = document.getElementById('intro12');
    intro.style.display = 'block'; //or
    intro.style.visibility = 'visible';
    intro.innerHTML = "Check back on Feb 9th"
    }


    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 1,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(-33, 151), // New York

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        disableDoubleClickZoom: true,
        draggable: false,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        },
        {
            featureType: "administrative",
            elementType: "labels",
            stylers: [
              { visibility: "off" }
            ]
        },
        {
            featureType: "poi",
            elementType: "labels",
            stylers: [
              { visibility: "off" }
            ]
        },
        {
            featureType: "water",
            elementType: "labels",
            stylers: [
              { visibility: "off" }
            ]
        },
        {
            featureType: "road",
            elementType: "labels",
            stylers: [
              { visibility: "off" }
            ]            
        }]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    // var markerON = true;
    // if (markerON == true){
        var image = 'img/map-marker.png';
            var myLatLng = new google.maps.LatLng(-33, 151);
            var beachMarker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            icon: image
    });
    // }
}
