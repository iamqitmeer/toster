"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToastItem = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var ToastItem = function (_a) {
    var toast = _a.toast, onDismiss = _a.onDismiss;
    var handleDismiss = (0, react_1.useCallback)(function () {
        onDismiss(toast.id);
    }, [toast.id, onDismiss]);
    (0, react_1.useEffect)(function () {
        if (toast.duration && toast.duration !== Infinity) {
            var timer_1 = setTimeout(function () {
                handleDismiss();
            }, toast.duration);
            return function () { return clearTimeout(timer_1); };
        }
    }, [toast.duration, handleDismiss]);
    var toastClass = "toster-toast toster-toast--".concat(toast.type);
    return ((0, jsx_runtime_1.jsxs)("li", { className: toastClass, "data-visible": toast.visible, role: "status", "aria-live": "polite", "aria-atomic": "true", children: [(0, jsx_runtime_1.jsxs)("div", { className: "toster-toast-content", children: [(0, jsx_runtime_1.jsx)("div", { className: "toster-toast-message", children: toast.message }), toast.description && ((0, jsx_runtime_1.jsx)("div", { className: "toster-toast-description", children: toast.description }))] }), toast.action && ((0, jsx_runtime_1.jsx)("button", { className: "toster-toast-action-button", onClick: function (e) {
                    var _a;
                    (_a = toast.action) === null || _a === void 0 ? void 0 : _a.onClick(e);
                    handleDismiss();
                }, children: toast.action.label })), (0, jsx_runtime_1.jsx)("button", { "aria-label": "Close", className: "toster-toast-close-button", onClick: handleDismiss, children: (0, jsx_runtime_1.jsxs)("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: [(0, jsx_runtime_1.jsx)("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), (0, jsx_runtime_1.jsx)("line", { x1: "6", y1: "6", x2: "18", y2: "18" })] }) })] }));
};
exports.ToastItem = ToastItem;
