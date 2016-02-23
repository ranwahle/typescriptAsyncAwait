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
class GeoLocation {
    getCurrntPosition() {
        var promise = new Promise((resolve, reject) => {
            if (!navigator.geolocation) {
                reject('Your browser doesn\'t support geo location');
            }
            else {
                navigator.geolocation.getCurrentPosition(function (position) {
                    resolve({ lat: position.coords.latitude,
                        lng: position.coords.longitude });
                });
            }
        });
        return promise;
    }
}
(function () {
    function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 6
        });
        var infoWindow = new google.maps.InfoWindow({ map: map });
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
    document.addEventListener('DOMContentLoaded', () => initMap());
}());
//# sourceMappingURL=MapExample.js.map