// In the following example, markers appear when the user clicks on the map.
// Each marker is labeled with a single alphabetical character.
var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;
var map;
var markers = [];
var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

function initMap() {
var Aguascalientes = {lat: 21.8833, lng: -102.283};
map = new google.maps.Map(document.getElementById('map'), {
  zoom: 8,
  center: Aguascalientes
});

// This event listener calls addMarker() when the map is clicked.
 map.addListener('click', function(event) {
   addMarker(event.latLng, image);
 });

// Add a marker at the center of the map.
	addMarker(Aguascalientes, image);
}
 
function addMarker(location, icon) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  var marker = new google.maps.Marker({
    position: location,
    label: labels[labelIndex++ % labels.length],  // If wanted a letter as label 
    map: map,
    icon: icon,                                     // if wantyed an icon image
    draggable:true,                                 // If wanted to drag the marker
    title:"Drag me!"
  });
  markers.push(marker);
}

// Sets the map on all markers in the array.
function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setMapOnAll(null);
}

// Shows any markers currently in the array.
function showMarkers() {
  setMapOnAll(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
  clearMarkers();
  markers = [];
}

//google.maps.event.addDomListener(window, 'load', initMap);

