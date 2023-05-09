let map;
let markers = [];
function initMap() {
  //  render map
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 21.027763, lng: 105.83416 },
    zoom: 8,
  });
  // create marker
  map.addListener("click", function (event) {
    // get clicked location
    const clickedLocation = event.latLng;
    
    const existingMarker = markers.find((marker) => {
      return marker.getPosition().equals(clickedLocation);
    });
    console.log(existingMarker);
    if (existingMarker) {
      existingMarker.setMap(null);
      markers = markers.filter((marker) => {
        return marker !== existingMarker;
      });
    } else {
      const marker = new google.maps.Marker({
        position: event.latLng,
        map: map,
        title: "Clicked location",
      });

      // show an info window with the clicked location
      // const infoWindow = new google.maps.InfoWindow({
      //   content:
      //     "Latitude: " +
      //     event.latLng.lat() +
      //     "<br>Longitude: " +
      //     event.latLng.lng(),
      // });
      // infoWindow.open(map, marker)
      markers.push(marker);
      console.log(markers);
    }
  });
  markers.forEach((marker) => {
    marker.addListener("click", () => {
      marker.setMap(null);
      markers = markers.filter((m) => {
        return m !== marker;
      });
    });
  });
}
