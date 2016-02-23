/**
 * Created by ranwahle on 23/02/2016.
 */




 class GeoLocation {
        getCurrntPosition() {

            var promise = new Promise((resolve, reject) => {

                if (!navigator.geolocation) {
                    reject('Your browser doesn\'t support geo location');
                }
                else {

                    navigator.geolocation.getCurrentPosition(function (position) {
                        resolve({lat: position.coords.latitude,
                        lng: position.coords.longitude} );


                    });
                }


            });

            return promise;
        }
    }
(function()
{
    function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 6
        });
        var infoWindow = new google.maps.InfoWindow({map: map});

        // Try HTML5 geolocation.
        var geoLocation = new GeoLocation();
        geoLocation.getCurrntPosition().then(position => {
            var pos = position;

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            map.setCenter(pos);
        }).catch(error => {
            console.log(error);
        });


    }



  document.addEventListener('DOMContentLoaded', ()=> initMap());
}());