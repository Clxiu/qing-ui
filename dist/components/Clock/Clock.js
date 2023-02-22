"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./Clock.css");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Clock = function Clock() {
  var _useState = (0, _react.useState)(new Date()),
    _useState2 = _slicedToArray(_useState, 2),
    date = _useState2[0],
    setDate = _useState2[1];
  (0, _react.useEffect)(function () {
    var intervalId = setInterval(function () {
      setDate(new Date());
    }, 1000);
    return function () {
      return clearInterval(intervalId);
    };
  }, []);
  var getHandAngle = function getHandAngle(hand) {
    var value = date["get".concat(hand)]();
    var degrees = value * 6;
    return degrees;
  };
  var hourStyle = {
    transform: "rotate(".concat(getHandAngle('Hours'), "deg)")
  };
  var minuteStyle = {
    transform: "rotate(".concat(getHandAngle('Minutes'), "deg)")
  };
  var secondStyle = {
    transform: "rotate(".concat(getHandAngle('Seconds'), "deg)")
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "clock"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "clock-face"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "hand hour-hand",
    style: hourStyle
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "hand minute-hand",
    style: minuteStyle
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "hand second-hand",
    style: secondStyle
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "number twelve"
  }, "XII"), /*#__PURE__*/_react.default.createElement("div", {
    className: "number one"
  }, "I"), /*#__PURE__*/_react.default.createElement("div", {
    className: "number two"
  }, "II"), /*#__PURE__*/_react.default.createElement("div", {
    className: "number three"
  }, "III"), /*#__PURE__*/_react.default.createElement("div", {
    className: "number four"
  }, "IV"), /*#__PURE__*/_react.default.createElement("div", {
    className: "number five"
  }, "V"), /*#__PURE__*/_react.default.createElement("div", {
    className: "number six"
  }, "VI"), /*#__PURE__*/_react.default.createElement("div", {
    className: "number seven"
  }, "VII"), /*#__PURE__*/_react.default.createElement("div", {
    className: "number eight"
  }, "VIII"), /*#__PURE__*/_react.default.createElement("div", {
    className: "number nine"
  }, "IX"), /*#__PURE__*/_react.default.createElement("div", {
    className: "number ten"
  }, "X"), /*#__PURE__*/_react.default.createElement("div", {
    className: "number eleven"
  }, "XI"), /*#__PURE__*/_react.default.createElement("div", {
    className: "center-dot"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "digital"
  }, date.toLocaleTimeString()));
};
var _default = Clock;
exports.default = _default;