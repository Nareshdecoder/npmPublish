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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Button = function (props) {
    var _a = props || {}, _b = _a.title, title = _b === void 0 ? "" : _b, _c = _a.variant, variant = _c === void 0 ? "primary" : _c, _d = _a.size, size = _d === void 0 ? "md" : _d, className = _a.className, image = _a.image;
    return (react_1.default.createElement("button", __assign({}, props, { type: "button", className: "btn " + size + " btn-" + variant + " sp-button " + className + " " }),
        image,
        title));
};
exports.default = Button;
