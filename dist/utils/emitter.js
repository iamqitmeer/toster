"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emitter = void 0;
var Emitter = /** @class */ (function () {
    function Emitter() {
        this.callbacks = {};
    }
    Emitter.prototype.on = function (event, callback) {
        var _a;
        if (!this.callbacks[event]) {
            this.callbacks[event] = [];
        }
        (_a = this.callbacks[event]) === null || _a === void 0 ? void 0 : _a.push(callback);
    };
    Emitter.prototype.emit = function (event, data) {
        var _a;
        (_a = this.callbacks[event]) === null || _a === void 0 ? void 0 : _a.forEach(function (callback) { return callback(data); });
    };
    Emitter.prototype.off = function (event, callback) {
        var _a;
        this.callbacks[event] = (_a = this.callbacks[event]) === null || _a === void 0 ? void 0 : _a.filter(function (cb) { return cb !== callback; });
    };
    return Emitter;
}());
exports.Emitter = Emitter;
