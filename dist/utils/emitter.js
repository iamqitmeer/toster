"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emitter = void 0;
var Emitter = /** @class */ (function () {
    function Emitter() {
        this.listeners = {};
    }
    Emitter.prototype.on = function (event, listener) {
        var _this = this;
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(listener);
        return function () { return _this.off(event, listener); };
    };
    Emitter.prototype.off = function (event, listener) {
        if (!this.listeners[event]) {
            return;
        }
        this.listeners[event] = this.listeners[event].filter(function (l) { return l !== listener; });
    };
    Emitter.prototype.emit = function (event, data) {
        if (!this.listeners[event]) {
            return;
        }
        this.listeners[event].forEach(function (listener) { return listener(data); });
    };
    return Emitter;
}());
exports.Emitter = Emitter;
