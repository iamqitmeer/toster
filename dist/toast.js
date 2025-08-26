"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toast = exports.emitter = void 0;
var emitter_1 = require("./utils/emitter");
var emitter = new emitter_1.Emitter();
exports.emitter = emitter;
var genId = function () { return Math.random().toString(36).substring(2, 9); };
var DEFAULT_DURATION = 4000;
function createToast(message, options) {
    var _a;
    if (options === void 0) { options = {}; }
    var id = genId();
    var toast = __assign(__assign({ id: id, message: message, visible: true, type: options.type || 'default' }, options), { duration: (_a = options.duration) !== null && _a !== void 0 ? _a : DEFAULT_DURATION });
    emitter.emit('ADD', toast);
    return id;
}
var toast = function (message, options) {
    return createToast(message, __assign(__assign({}, options), { type: 'default' }));
};
exports.toast = toast;
toast.success = function (message, options) {
    return createToast(message, __assign(__assign({}, options), { type: 'success' }));
};
toast.error = function (message, options) {
    return createToast(message, __assign(__assign({}, options), { type: 'error' }));
};
toast.warning = function (message, options) {
    return createToast(message, __assign(__assign({}, options), { type: 'warning' }));
};
toast.info = function (message, options) {
    return createToast(message, __assign(__assign({}, options), { type: 'info' }));
};
toast.promise = function (promise, messages, options) {
    var id = createToast(messages.loading, __assign(__assign({}, options), { type: 'loading', duration: Infinity }));
    promise
        .then(function (data) {
        var _a;
        var message = typeof messages.success === 'function' ? messages.success(data) : messages.success;
        emitter.emit('UPDATE', { id: id, message: message, type: 'success', duration: (_a = options === null || options === void 0 ? void 0 : options.duration) !== null && _a !== void 0 ? _a : DEFAULT_DURATION });
    })
        .catch(function (error) {
        var _a;
        var message = typeof messages.error === 'function' ? messages.error(error) : messages.error;
        emitter.emit('UPDATE', { id: id, message: message, type: 'error', duration: (_a = options === null || options === void 0 ? void 0 : options.duration) !== null && _a !== void 0 ? _a : DEFAULT_DURATION });
    });
    return id;
};
toast.dismiss = function (id) {
    emitter.emit('REMOVE', id);
};
