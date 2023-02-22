"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
require("./index.css");
var _reportWebVitals = _interopRequireDefault(require("./reportWebVitals"));
var _TodoList = _interopRequireDefault(require("./components/TodoList/TodoList"));
var _Clock = _interopRequireDefault(require("./components/Clock/Clock"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import App from './App';

var root = _client.default.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_TodoList.default, null), /*#__PURE__*/_react.default.createElement(_Clock.default, null)));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0, _reportWebVitals.default)();