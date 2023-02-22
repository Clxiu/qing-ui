"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./TodoList.css");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// 引入样式文件

var TodoList = function TodoList() {
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    tasks = _useState2[0],
    setTasks = _useState2[1];
  var _useState3 = (0, _react.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    inputValue = _useState4[0],
    setInputValue = _useState4[1];
  var _useState5 = (0, _react.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    showError = _useState6[0],
    setShowError = _useState6[1];
  var handleInputChange = function handleInputChange(event) {
    setInputValue(event.target.value);
  };
  var handleAddTask = function handleAddTask(event) {
    event.preventDefault();

    // 检查输入是否为空或包含非法字符
    var pattern = /^[a-zA-Z0-9\s.,?!']+$/;
    if (!inputValue.trim()) {
      setShowError("Please enter a task name"); // 显示错误消息
      return;
    } else if (!pattern.test(inputValue)) {
      setShowError("This is a task with illegal characters: @#$%"); // 显示错误消息
      return;
    }
    setShowError(""); // 隐藏错误消息

    setTasks([].concat(_toConsumableArray(tasks), [{
      text: inputValue,
      completed: false
    }]));
    setInputValue("");
  };
  var handleRemoveTask = function handleRemoveTask(index) {
    if (index < 0 || index >= tasks.length) {
      setShowError("There is nothing to remove");
      return;
    }
    var newTasks = _toConsumableArray(tasks);
    newTasks.splice(index, 1);
    setTasks(newTasks);
    setShowError("");
  };
  var handleToggleCompleted = function handleToggleCompleted(index) {
    if (index < 0 || index >= tasks.length) {
      setShowError("There is nothing to complete");
      return;
    }
    var newTasks = _toConsumableArray(tasks);
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
    setShowError("");
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "todo-list"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Todo List"), showError !== "" && /*#__PURE__*/_react.default.createElement("div", {
    className: "error-message"
  }, showError), /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleAddTask
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: "Add a new task",
    value: inputValue,
    onChange: handleInputChange
  }), /*#__PURE__*/_react.default.createElement("button", {
    type: "submit"
  }, "Add")), /*#__PURE__*/_react.default.createElement("ul", {
    className: "task-list"
  }, tasks.map(function (task, index) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: index,
      className: task.completed ? "completed" : "",
      "data-testid": "task-Task " + (index + 1)
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "task-details"
    }, /*#__PURE__*/_react.default.createElement("input", {
      type: "checkbox",
      checked: task.completed,
      onChange: function onChange() {
        return handleToggleCompleted(index);
      },
      "data-testid": "task-Task " + (index + 1) + "-checkbox"
    }), /*#__PURE__*/_react.default.createElement("span", null, task.text)), /*#__PURE__*/_react.default.createElement("button", {
      className: "remove-button",
      onClick: function onClick() {
        return handleRemoveTask(index);
      }
    }, "remove Task ", index + 1));
  })));
};
var _default = TodoList;
exports.default = _default;