"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorHandler = void 0;

var _Toast = require("./Toast");

var ErrorHandler = function ErrorHandler(data) {
  if (!data) return;

  for (var key in data) {
    var child = data[key];
    console.log(child);

    if (child.length > 1) {
      child.map(function (c) {
        (0, _Toast.toast)(c, "error");
      });
    } else {
      (0, _Toast.toast)(child[0], "error"); // toast(typeof child === Array ?child[0]:child,"error");
    }
  }
};

exports.ErrorHandler = ErrorHandler;