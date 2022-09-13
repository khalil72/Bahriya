"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toast = void 0;

var _reactToastify = require("react-toastify");

var toast = function toast(message) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "success";
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;
  var msg = message ? message.toUpperCase() : message;

  switch (type) {
    case "success":
      _reactToastify.toast.success(msg, {
        position: "top-right",
        autoClose: duration,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });

      break;

    case "warning":
      _reactToastify.toast.warn(msg, {
        position: "top-right",
        autoClose: duration,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });

      break;

    case "error":
      _reactToastify.toast.error(msg, {
        position: "top-right",
        autoClose: duration,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });

      break;

    case "dark":
      _reactToastify.toast.dark(msg, {
        position: "top-right",
        autoClose: duration,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });

      break;

    default:
      (0, _reactToastify.toast)(msg, {
        position: "top-right",
        autoClose: duration,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
      break;
  }
};

exports.toast = toast;