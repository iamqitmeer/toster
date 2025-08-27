"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToastItem = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Icons = {
    success: function () { return (0, jsx_runtime_1.jsxs)("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [(0, jsx_runtime_1.jsx)("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }), (0, jsx_runtime_1.jsx)("polyline", { points: "22 4 12 14.01 9 11.01" })] }); },
    error: function () { return (0, jsx_runtime_1.jsxs)("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [(0, jsx_runtime_1.jsx)("circle", { cx: "12", cy: "12", r: "10" }), (0, jsx_runtime_1.jsx)("line", { x1: "15", y1: "9", x2: "9", y2: "15" }), (0, jsx_runtime_1.jsx)("line", { x1: "9", y1: "9", x2: "15", y2: "15" })] }); },
    warning: function () { return (0, jsx_runtime_1.jsxs)("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [(0, jsx_runtime_1.jsx)("path", { d: "m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" }), (0, jsx_runtime_1.jsx)("line", { x1: "12", y1: "9", x2: "12", y2: "13" }), (0, jsx_runtime_1.jsx)("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })] }); },
    info: function () { return (0, jsx_runtime_1.jsxs)("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [(0, jsx_runtime_1.jsx)("circle", { cx: "12", cy: "12", r: "10" }), (0, jsx_runtime_1.jsx)("line", { x1: "12", y1: "16", x2: "12", y2: "12" }), (0, jsx_runtime_1.jsx)("line", { x1: "12", y1: "8", x2: "12.01", y2: "8" })] }); },
    loading: function () { return (0, jsx_runtime_1.jsx)("div", { className: "toster-spinner" }); },
    default: function () { return (0, jsx_runtime_1.jsxs)("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [(0, jsx_runtime_1.jsx)("path", { d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" }), (0, jsx_runtime_1.jsx)("path", { d: "m9 12 2 2 4-4" })] }); },
};
var ToastItem = function (_a) {
    var toast = _a.toast, onDismiss = _a.onDismiss;
    var _b = (0, react_1.useState)(false), isMounted = _b[0], setIsMounted = _b[1];
    (0, react_1.useEffect)(function () {
        var timeout = setTimeout(function () {
            setIsMounted(true);
        }, 10);
        return function () { return clearTimeout(timeout); };
    }, []);
    var handleDismiss = (0, react_1.useCallback)(function () {
        onDismiss(toast.id);
    }, [toast.id, onDismiss]);
    (0, react_1.useEffect)(function () {
        if (toast.duration && toast.duration !== Infinity) {
            var timer_1 = setTimeout(handleDismiss, toast.duration);
            return function () { return clearTimeout(timer_1); };
        }
    }, [toast.duration, handleDismiss]);
    var ToastIcon = Icons[toast.type];
    var toastClass = "toster-toast toster-toast--".concat(toast.type);
    var progressStyle = {
        '--toster-duration': "".concat(toast.duration, "ms"),
    };
    return ((0, jsx_runtime_1.jsxs)("li", { className: toastClass, "data-visible": toast.visible && isMounted, role: "status", "aria-live": "polite", "aria-atomic": "true", children: [(0, jsx_runtime_1.jsx)("div", { className: "toster-toast-icon", children: toast.icon || (0, jsx_runtime_1.jsx)(ToastIcon, {}) }), (0, jsx_runtime_1.jsxs)("div", { className: "toster-toast-content", children: [(0, jsx_runtime_1.jsx)("div", { className: "toster-toast-message", children: toast.message }), toast.description && ((0, jsx_runtime_1.jsx)("div", { className: "toster-toast-description", children: toast.description }))] }), toast.action && ((0, jsx_runtime_1.jsx)("button", { className: "toster-toast-action-button", onClick: function (e) {
                    var _a;
                    (_a = toast.action) === null || _a === void 0 ? void 0 : _a.onClick(e);
                    handleDismiss();
                }, children: toast.action.label })), (0, jsx_runtime_1.jsx)("button", { "aria-label": "Close", className: "toster-toast-close-button", onClick: handleDismiss, children: (0, jsx_runtime_1.jsxs)("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: [(0, jsx_runtime_1.jsx)("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), (0, jsx_runtime_1.jsx)("line", { x1: "6", y1: "6", x2: "18", y2: "18" })] }) }), toast.duration !== Infinity && (0, jsx_runtime_1.jsx)("div", { className: "toster-progress-bar", style: progressStyle })] }));
};
exports.ToastItem = ToastItem;
