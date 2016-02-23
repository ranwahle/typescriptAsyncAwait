/**
 * Created by ranwahle on 22/02/2016.
 */
"use strict";
class Someclass {
    someMethod() { }
}
(function () {
    function main() {
        var cl = new Someclass();
        ping();
    }
    function ping() {
        var i = 0;
        function recursivePing() {
            if (i === 10)
                return;
            delay(300).then(() => {
                i++;
                console.log('ping');
                recursivePing();
            });
        }
        recursivePing();
        return new Promise(resolve => resolve);
    }
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    main();
}());
//# sourceMappingURL=Promise.js.map