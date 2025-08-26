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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toaster = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var toast_1 = require("./toast");
var ToastItem_1 = require("./ToastItem");
var EXIT_ANIMATION_DURATION = 300;
var Toaster = function (_a) {
    var _b = _a.position, position = _b === void 0 ? 'bottom-right' : _b, _c = _a.theme, theme = _c === void 0 ? 'light' : _c, className = _a.className, style = _a.style;
    var _d = (0, react_1.useState)(new Map()), toasts = _d[0], setToasts = _d[1];
    (0, react_1.useEffect)(function () {
        var addHandler = function (toast) {
            setToasts(function (currentToasts) {
                var newToasts = new Map(currentToasts);
                newToasts.set(toast.id, toast);
                return newToasts;
            });
        };
        var updateHandler = function (updatedToast) {
            setToasts(function (currentToasts) {
                var newToasts = new Map(currentToasts);
                var existingToast = newToasts.get(updatedToast.id);
                if (existingToast) {
                    newToasts.set(updatedToast.id, __assign(__assign({}, existingToast), updatedToast));
                }
                return newToasts;
            });
        };
        var removeHandler = function (id) {
            if (!id) {
                setToasts(function (currentToasts) {
                    var newToasts = new Map();
                    currentToasts.forEach(function (toast) {
                        newToasts.set(toast.id, __assign(__assign({}, toast), { visible: false }));
                    });
                    setTimeout(function () { return setToasts(new Map()); }, EXIT_ANIMATION_DURATION);
                    return newToasts;
                });
                return;
            }
            setToasts(function (currentToasts) {
                var newToasts = new Map(currentToasts);
                var toastToRemove = newToasts.get(id);
                if (toastToRemove) {
                    newToasts.set(id, __assign(__assign({}, toastToRemove), { visible: false }));
                    setTimeout(function () {
                        setToasts(function (toastsAfterAnimation) {
                            var finalToasts = new Map(toastsAfterAnimation);
                            finalToasts.delete(id);
                            return finalToasts;
                        });
                    }, EXIT_ANIMATION_DURATION);
                }
                return newToasts;
            });
        };
        toast_1.emitter.on('ADD', addHandler);
        toast_1.emitter.on('UPDATE', updateHandler);
        toast_1.emitter.on('REMOVE', removeHandler);
        return function () {
            toast_1.emitter.off('ADD', addHandler);
            toast_1.emitter.off('UPDATE', updateHandler);
            toast_1.emitter.off('REMOVE', removeHandler);
        };
    }, []);
    var onDismiss = function (id) {
        toast_1.emitter.emit('REMOVE', id);
    };
    var toastArray = (0, react_1.useMemo)(function () { return Array.from(toasts.values()); }, [toasts]);
    var isTopPosition = position.includes('top');
    var sortedToasts = isTopPosition ? toastArray : __spreadArray([], toastArray, true).reverse();
    var containerClass = "toster-container toster-container--".concat(position, " ").concat(className || '');
    return ((0, jsx_runtime_1.jsx)("ul", { className: containerClass, "data-theme": theme, style: style, "aria-live": "assertive", "aria-atomic": "true", children: sortedToasts.map(function (toast) { return ((0, jsx_runtime_1.jsx)(ToastItem_1.ToastItem, { toast: toast, onDismiss: onDismiss }, toast.id)); }) }));
};
exports.Toaster = Toaster;
