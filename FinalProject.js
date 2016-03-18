
// In the following example, markers appear when the user clicks on the map.
// Each marker is labeled with a single alphabetical character.
var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;
var map;

function initMap() {
var Aguascalientes = {lat: 21.8833, lng: -102.283};

var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 8,
  center: Aguascalientes
});

// This event listener calls addMarker() when the map is clicked.
 google.maps.event.addListener(map, 'click', function(event) {
   addMarker(event.latLng, map);
 });

// Add a marker at the center of the map.
	addMarker(Aguascalientes, map, image);
}

var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
function addMarker(location, map, icon) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  var marker = new google.maps.Marker({
    position: location,
    //title: location,    // this don't work 
    label: labels[labelIndex++ % labels.length],  // If wanted a letter as label 
    map: map,
    icon: icon,                                     // if wantyed an icon image
    draggable:true,                                 // If wanted to drag the marker
    title:"Drag me!"
  });
}

google.maps.event.addDomListener(window, 'load', initMap);

