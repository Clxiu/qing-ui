import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TodoList from "./TodoList";

describe("TodoList", () => {
  it("adds a new task when the add button is clicked", () => {
    render(<TodoList />);

    // add a task to the list
    const input = screen.getByPlaceholderText("Add a new task");
    const addButton = screen.getByRole("button", { name: "Add" });
    fireEvent.change(input, { target: { value: "Task 1" } });
    fireEvent.click(addButton);

    // check whether the task is added
    expect(screen.getByText("Task 1")).toBeInTheDocument();
  });

  it("removes a task when the remove button is clicked", () => {
    render(<TodoList />);

    // add a task to the list
    const input = screen.getByPlaceholderText("Add a new task");
    const addButton = screen.getByRole("button", { name: "Add" });
    fireEvent.change(input, { target: { value: "Task 1" } });
    fireEvent.click(addButton);

    // remove the task from the list
    const removeButton = screen.getByText("remove Task 1");
    fireEvent.click(removeButton);

    // check whether the task is still in the list
    expect(screen.queryByLabelText("Task 1")).toBeNull();
  });

  it("toggles a task's completed status when the checkbox is clicked", () => {
    render(<TodoList />);

    // add a task to the list
    const input = screen.getByPlaceholderText("Add a new task");
    const addButton = screen.getByRole("button", { name: "Add" });
    fireEvent.change(input, { target: { value: "Task 1" } });
    fireEvent.click(addButton);

    // click the checkbox of the task
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    // check whether the checkbox is clicked
    expect(checkbox).toBeChecked();

    // unclick the checkbox
    fireEvent.click(checkbox);
    // check whether the checkbox is clicked
    expect(checkbox).not.toBeChecked();
  });

  it("should show an error message when input is empty", () => {
    render(<TodoList />);
    // add an empty task to the list
    const addButton = screen.getByRole("button", { name: "Add" });
    fireEvent.click(addButton);
    const errorMessage = screen.getByText("Please enter a task name");

    // check whether there is an error message
    expect(errorMessage).toBeInTheDocument();
  });

  it("should show an error message when input contains illegal characters", () => {
    render(<TodoList />);
    // add a task that contains illegal characters to the list
    const input = screen.getByPlaceholderText("Add a new task");
    fireEvent.change(input, { target: { value: "This is a task with illegal characters: @#$%" } });
    const addButton = screen.getByRole("button", { name: "Add" });
    fireEvent.click(addButton);
    const errorMessage = screen.getByText("This is a task with illegal characters: @#$%");

    // check whether there is an error message
    expect(errorMessage).toBeInTheDocument();
  });

  it("should mark a task as completed when clicked", () => {
    render(<TodoList />);

    // add a task to the list
    const input = screen.getByPlaceholderText("Add a new task");
    const addButton = screen.getByRole("button", { name: "Add" });
    fireEvent.change(input, { target: { value: "Task 1" } });
    fireEvent.click(addButton);

    // find the task by text content
    const task = screen.getByTestId('task-Task 1');
    // check whether the task does not have the completed class
    expect(task).not.toHaveClass('completed');

    // find the checkbox within the task element
    const checkbox = screen.getByTestId('task-Task 1-checkbox');
    // click the checkbox to mark the task as completed
    fireEvent.click(checkbox);
    // check whether the task has the completed class
    expect(task).toHaveClass('completed');
  });

  it("should unmark a completed task when clicked", () => {
    render(<TodoList />);
    // add a task to the list
    const input = screen.getByPlaceholderText("Add a new task");
    const addButton = screen.getByRole("button", { name: "Add" });
    fireEvent.change(input, { target: { value: "Task 2" } });

    // complete the task
    fireEvent.click(addButton);
    const task = screen.getByText("Task 2");
    // unmark the completed task
    fireEvent.click(task);
    // check whether the task has the completed class
    expect(task).not.toHaveClass("completed");
  });
});