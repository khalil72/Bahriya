"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _property = _interopRequireDefault(require("../Images/property2.jpg"));

var _property2 = _interopRequireDefault(require("../Images/property4.webp"));

var _image = _interopRequireDefault(require("../Images/image1.jpg"));

var _property3 = _interopRequireDefault(require("../Images/property6.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PropertyData = [{
  id: 1,
  title: 'Property1',
  price: '40lac',
  type: 'buy',
  image: _property["default"],
  size: '250sq.ft built up area',
  location: 'Antop Hill, Wadala, Mumbai',
  city: 1
}, {
  id: 2,
  title: 'Property2',
  price: '50lac',
  type: 'rent',
  image: _property2["default"],
  size: '200sq.ft built up area',
  location: 'Antop Hill, Wadala, Mumbai',
  city: 1
}, {
  id: 3,
  title: 'Property3',
  price: '60lac',
  type: 'rent',
  image: _image["default"],
  size: '100sq.ft built up area',
  location: 'Antop Hill, Wadala, Mumbai',
  city: 1
}, {
  id: 4,
  title: 'Property3',
  price: '70lac',
  type: 'buy',
  image: _property3["default"],
  size: '150sq.ft built up area',
  location: 'Antop Hill, Wadala, Mumbai',
  city: 2
}, {
  id: 5,
  title: 'Property3',
  price: '70lac',
  type: 'buy',
  image: _property3["default"],
  size: '250sq.ft built up area',
  location: 'Antop Hill, Wadala, Mumbai',
  city: 1
}];
var _default = PropertyData;
exports["default"] = _default;