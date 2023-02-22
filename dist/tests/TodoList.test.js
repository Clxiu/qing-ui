"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _TodoList = _interopRequireDefault(require("../components/TodoList/TodoList"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe("TodoList", function () {
  it("adds a new task when the add button is clicked", function () {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_TodoList.default, null));
    // add a task to the list
    var input = _react2.screen.getByPlaceholderText("Add a new task");
    var addButton = _react2.screen.getByRole("button", {
      name: "Add"
    });
    _react2.fireEvent.change(input, {
      target: {
        value: "Task 1"
      }
    });
    _react2.fireEvent.click(addButton);

    // check whether the task is added
    expect(_react2.screen.getByText("Task 1")).toBeInTheDocument();
  });
  it("removes a task when the remove button is clicked", function () {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_TodoList.default, null));
    // add a task to the list
    var input = _react2.screen.getByPlaceholderText("Add a new task");
    var addButton = _react2.screen.getByRole("button", {
      name: "Add"
    });
    _react2.fireEvent.change(input, {
      target: {
        value: "Task 1"
      }
    });
    _react2.fireEvent.click(addButton);

    // remove the task from the list
    var removeButton = _react2.screen.getByText("remove Task 1");
    _react2.fireEvent.click(removeButton);

    // check whether the task is still in the list
    expect(_react2.screen.queryByLabelText("Task 1")).toBeNull();
  });
  it("toggles a task's completed status when the checkbox is clicked", function () {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_TodoList.default, null));
    // add a task to the list
    var input = _react2.screen.getByPlaceholderText("Add a new task");
    var addButton = _react2.screen.getByRole("button", {
      name: "Add"
    });
    _react2.fireEvent.change(input, {
      target: {
        value: "Task 1"
      }
    });
    _react2.fireEvent.click(addButton);

    // click the checkbox of the task
    var checkbox = _react2.screen.getByRole('checkbox');
    _react2.fireEvent.click(checkbox);
    // check whether the checkbox is clicked
    expect(checkbox).toBeChecked();

    // unclick the checkbox
    _react2.fireEvent.click(checkbox);
    // check whether the checkbox is clicked
    expect(checkbox).not.toBeChecked();
  });
  it("should show an error message when input is empty", function () {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_TodoList.default, null));
    // add an empty task to the list
    var addButton = _react2.screen.getByRole("button", {
      name: "Add"
    });
    _react2.fireEvent.click(addButton);
    var errorMessage = _react2.screen.getByText("Please enter a task name");

    // check whether there is an error message
    expect(errorMessage).toBeInTheDocument();
  });
  it("should show an error message when input contains illegal characters", function () {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_TodoList.default, null));
    // add a task that contains illegal characters to the list
    var input = _react2.screen.getByPlaceholderText("Add a new task");
    _react2.fireEvent.change(input, {
      target: {
        value: "This is a task with illegal characters: @#$%"
      }
    });
    var addButton = _react2.screen.getByRole("button", {
      name: "Add"
    });
    _react2.fireEvent.click(addButton);
    var errorMessage = _react2.screen.getByText("This is a task with illegal characters: @#$%");

    // check whether there is an error message
    expect(errorMessage).toBeInTheDocument();
  });
  it("should mark a task as completed when clicked", function () {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_TodoList.default, null));
    // add a task to the list
    var input = _react2.screen.getByPlaceholderText("Add a new task");
    var addButton = _react2.screen.getByRole("button", {
      name: "Add"
    });
    _react2.fireEvent.change(input, {
      target: {
        value: "Task 1"
      }
    });
    _react2.fireEvent.click(addButton);

    // find the task by text content
    var task = _react2.screen.getByTestId('task-Task 1');
    // check whether the task does not have the completed class
    expect(task).not.toHaveClass('completed');

    // find the checkbox within the task element
    var checkbox = _react2.screen.getByTestId('task-Task 1-checkbox');
    // click the checkbox to mark the task as completed
    _react2.fireEvent.click(checkbox);
    // check whether the task has the completed class
    expect(task).toHaveClass('completed');
  });
  it("should unmark a completed task when clicked", function () {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_TodoList.default, null));
    // add a task to the list
    var input = _react2.screen.getByPlaceholderText("Add a new task");
    var addButton = _react2.screen.getByRole("button", {
      name: "Add"
    });
    _react2.fireEvent.change(input, {
      target: {
        value: "Task 2"
      }
    });

    // complete the task
    _react2.fireEvent.click(addButton);
    var task = _react2.screen.getByText("Task 2");
    // unmark the completed task
    _react2.fireEvent.click(task);
    // check whether the task has the completed class
    expect(task).not.toHaveClass("completed");
  });
});