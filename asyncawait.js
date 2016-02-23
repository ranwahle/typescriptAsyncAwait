/**
 * Created by ranwahle on 22/02/2016.
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
function main() {
    return __awaiter(this, void 0, Promise, function* () {
        yield ping();
    });
}
function ping() {
    return __awaiter(this, void 0, Promise, function* () {
        for (var i = 0; i < 10; i++) {
            yield delay(300);
            console.log('ping');
        }
    });
}
function delay(ms) {
    return new Promise((resolve, reject) => setTimeout(resolve, ms));
}
main();
//# sourceMappingURL=asyncawait.js.map