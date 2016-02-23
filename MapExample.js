/**
 * Created by ranwahle on 23/02/2016.
 */
(function () {
    var mapApiKey = 'AIzaSyAbafFmWKjOF1l1S8aQCQLvzmIDjpE_ulU';
    //import googleMaps from 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAbafFmWKjOF1l1S8aQCQLvzmIDjpE_ulU&signed_in=true&callback=initMap'
    function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 6
        });
        var infoWindow = new google.maps.InfoWindow({ map: map });
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                infoWindow.setPosition(pos);
                infoWindow.setContent('Location found.');
                map.setCenter(pos);
            }, function () {
                handleLocationError(true, infoWindow, map.getCenter());
            });
        }
        else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }
    }
    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
    }
    document.addEventListener('DOMContentLoaded', () => initMap());
}());
//# sourceMappingURL=MapExample.js.map