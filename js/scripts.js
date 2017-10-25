// The following example creates complex markers to indicate beaches near
// Sydney, NSW, Australia. Note that the anchor is set to (0,32) to correspond
// to the base of the flagpole.

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    center: {lat: 50.207040, lng:5.510976}
  });

  setMarkers(map);
}

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
var coordinates = [
  ['Würzburg', 49.792017, 9.950237, 4],
  ['Berlin', 52.520050, 13.404871, 5],
  ['Speyer', 49.316830, 8.439153, 3],
  ['Rome', 41.902671, 12.496252, 2],
  ['Lancashire', 53.850536, -2.668760, 1],
  ['London', 51.507356, -0.127764, 1],
  ['Valais', 46.163517, 7.517275, 1],
  ['Paris', 48.857482, 2.349461, 1]
];

function setMarkers(map) {
  // Adds markers to the map.

  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.

  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down.
  // var image = {
  //   url: 'images/annie-smol.png',
  //   // This marker is 20 pixels wide by 32 pixels high.
  //   size: new google.maps.Size(20, 32),
  //   // The origin for this image is (0, 0).
  //   origin: new google.maps.Point(0, 0),
  //   // The anchor for this image is the base of the flagpole at (0, 32).
  //   anchor: new google.maps.Point(0, 32)
  // };
  var image = 'images/annieSmol.png';
  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.
  var shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly'
  };
  for (var i = 0; i < coordinates.length; i++) {
    var mark = coordinates[i];
    var marker = new google.maps.Marker({
      position: {lat: mark[1], lng: mark[2]},
      map: map,
      icon: image,
      shape: shape,
      title: mark[0],
      zIndex: mark[3]
    });
  }
}
