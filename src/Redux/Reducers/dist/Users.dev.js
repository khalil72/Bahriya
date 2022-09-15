"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.userAction = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = {
  user: null
};
var Users = (0, _toolkit.createSlice)({
  name: "users",
  initialState: initialState,
  reducers: {
    setUser: function setUser(state, action) {
      state.user = action.payload;
    }
  }
});
var userAction = Users.actions;
exports.userAction = userAction;
var _default = Users;
exports["default"] = _default;