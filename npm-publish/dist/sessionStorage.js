"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveToSession = function (label, data) {
    var value = JSON.stringify(data);
    sessionStorage.setItem(label, value);
};
exports.removeToSession = function (label) {
    sessionStorage.removeItem(label);
};
exports.getFromSession = function (label) {
    return sessionStorage.getItem(label);
};
