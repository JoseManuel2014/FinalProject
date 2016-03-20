// In the following example, markers appear when the user clicks on the map.
// Each marker is labeled with a single alphabetical character.
var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;
var map;
var markers = [];
var markerId = 1;
var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

window.onload = function () {
  var Aguascalientes = {lat: 21.8833, lng: -102.283};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: Aguascalientes
  });
  // This event listener calls addMarker() when the map is clicked.
   map.addListener('click', function(event) {
     var location = event.latLng;
     addMarker(location, image);
   });
  // Add a marker at the center of the map.
   addMarker(Aguascalientes, image);
};

function addMarker(location, icon) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  var marker = new google.maps.Marker({
    position: location,
    label: labels[labelIndex++ % labels.length],     // If wanted a letter as label 
    map: map,
    icon: image,                                     // if wantyed an icon image
    draggable:true,                                  // If wanted to drag the marker
    title:"Drag me!"
  });
  marker.id = markerId;
  markerId++;
  //Attach click event handler to the marker.
  marker.addListener("click", function (e) {
      var content = 'Latitude: ' + location.lat() + '<br />Longitude: ' + location.lng();
      content += "<br /><input type = 'button' va;ue = 'Delete' onclick = 'DeleteMarker(" + marker.id + ");' value = 'Delete' />";
      var infoWindow = new google.maps.InfoWindow({
          content: content
      });
      infoWindow.open(map, marker);
  });
  markers.push(marker);
};

function DeleteMarker(id) {
    //Find and remove the marker from the Array
    for (var i = 0; i < markers.length; i++) {
        if (markers[i].id == id) {
            //Remove the marker from Map                  
            markers[i].setMap(null);
            //Remove the marker from array.
            markers.splice(i, 1);
            return;
        }
    }
};
 
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


