"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _islamabad = _interopRequireDefault(require("../Images/islamabad.jpg"));

var _karachi = _interopRequireDefault(require("../Images/karachi.webp"));

var _lahore = _interopRequireDefault(require("../Images/lahore.jpg"));

var _multan = _interopRequireDefault(require("../Images/multan.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CityData = [{
  city_id: 1,
  city_name: 'Islamabad',
  city_image: _islamabad["default"]
}, {
  city_id: 2,
  city_name: 'Lahore',
  city_image: _karachi["default"]
}, {
  city_id: 3,
  city_name: 'Karachi',
  city_image: _lahore["default"]
}, {
  city_id: 4,
  city_name: 'Multan',
  city_image: _multan["default"]
}];
var _default = CityData;
exports["default"] = _default;