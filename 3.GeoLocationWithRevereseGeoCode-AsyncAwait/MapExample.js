/**
 * Created by ranwahle on 23/02/2016.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, Promise, generator) {
    return new Promise(function (resolve, reject) {
        generator = generator.call(thisArg, _arguments);
        function cast(value) { return value instanceof Promise && value.constructor === Promise ? value : new Promise(function (resolve) { resolve(value); }); }
        function onfulfill(value) { try { step("next", value); } catch (e) { reject(e); } }
        function onreject(value) { try { step("throw", value); } catch (e) { reject(e); } }
        function step(verb, value) {
            var result = generator[verb](value);
            result.done ? resolve(result.value) : cast(result.value).then(onfulfill, onreject);
        }
        step("next", void 0);
    });
};
(function () {
    var mapApiKey = 'AIzaSyAbafFmWKjOF1l1S8aQCQLvzmIDjpE_ulU';
    //import googleMaps from 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAbafFmWKjOF1l1S8aQCQLvzmIDjpE_ulU&signed_in=true&callback=initMap'
    class GeoLocation {
        getCurrntPosition() {
            var promise = new Promise((resolve, reject) => {
                if (!navigator.geolocation) {
                    reject('Your browser doesn\'t support geo location');
                }
                else {
                    navigator.geolocation.getCurrentPosition(function (position) {
                        resolve({
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        });
                    });
                }
            });
            return promise;
        }
        getCityByLatLng(latlng) {
            var promise = new Promise((resolve, reject) => {
                var geocoder = new google.maps.Geocoder;
                geocoder.geocode({ 'location': latlng }, function (results, status) {
                    if (status === google.maps.GeocoderStatus.OK) {
                        if (results[1]) {
                            resolve(results[1].formatted_address);
                        }
                        else {
                            reject('error in results');
                        }
                    }
                    else
                        reject('Couldn\'t reverse geocode');
                });
            });
            return promise;
        }
    }
    function initMap() {
        return __awaiter(this, void 0, Promise, function* () {
            var map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: -34.397, lng: 150.644 },
                zoom: 6
            });
            var infoWindow = new google.maps.InfoWindow({ map: map });
            // Try HTML5 geolocation.
            var geoLocation = new GeoLocation();
            var pos = yield geoLocation.getCurrntPosition();
            map.setCenter(pos);
            infoWindow.setPosition(pos);
            var address = yield geoLocation.getCityByLatLng(pos);
            infoWindow.setContent('You are in ' + address);
        });
    }
    document.addEventListener('DOMContentLoaded', () => initMap());
}());
//# sourceMappingURL=MapExample.js.map