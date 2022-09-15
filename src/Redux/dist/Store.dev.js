"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _Users = _interopRequireDefault(require("./Reducers/Users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Store = (0, _toolkit.configureStore)({
  reducer: {
    user: _Users["default"].reducer
  }
});
var _default = Store;
exports["default"] = _default;