"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorHandler = void 0;

var _Toast = require("./Toast");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var ErrorHandler = function ErrorHandler(data) {
  // console.log("🚀 ~ file: ErrorHandler.js ~ line 23 ~ ErrorHandler ~ data", data)
  if (typeof data === "string") {
    (0, _Toast.toast)(data, "error");
    return;
  }

  if (_typeof(data) !== "object" || !data) return;

  for (var key in data) {
    var child = data[key];
    console.log(child);

    if (_typeof(child) === Array && child.length > 1) {
      child.map(function (c) {
        (0, _Toast.toast)(c, "error");
      });
    } else {
      var valueAs = typeof child !== "string" ? child[0] : child; // console.log("🚀 ~ file: ErrorHandler.js ~ line 20 ~ ErrorHandler ~ valueAs",typeof valueAs)
      // console.log("🚀 ~ file: ErrorHandler.js ~ line 20 ~ ErrorHandler ~ valueAs", valueAs)

      (0, _Toast.toast)(valueAs, "error");
    }
  }
};

exports.ErrorHandler = ErrorHandler;