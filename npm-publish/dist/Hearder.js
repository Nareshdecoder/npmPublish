"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_bootstrap_1 = require("react-bootstrap");
var Button_1 = __importDefault(require("./Button"));
function Header() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", null,
            react_1.default.createElement(react_bootstrap_1.Navbar, { bg: "dark", variant: "dark" },
                react_1.default.createElement(react_bootstrap_1.Container, null,
                    react_1.default.createElement("div", null,
                        react_1.default.createElement(react_bootstrap_1.Navbar.Brand, { href: "#home" }, "Voyaging")),
                    react_1.default.createElement("div", { className: "d-flex justify-content-between" },
                        react_1.default.createElement(react_bootstrap_1.Nav, { className: "me-auto gap-4" },
                            react_1.default.createElement(react_bootstrap_1.Nav.Link, { href: "/home", className: "text-white" }, "Home"),
                            react_1.default.createElement(react_bootstrap_1.Nav.Link, { href: "/about", className: "text-white" }, "About"),
                            react_1.default.createElement(react_bootstrap_1.Nav.Link, { href: "/trips", className: "text-white" }, "Trips"),
                            react_1.default.createElement(Button_1.default, { title: "Logout", className: "text-white bg-primary" }))))))));
}
exports.default = Header;
