import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import Button from './components/Button/Button.jsx';
import TodoList from "./components/TodoList/TodoList.jsx";
import Clock from "./components/Clock/Clock.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Button text="Click me!" />
    <br/><br/>
    <Button className="btn primary" type="primary" text="Click me!" onClick={alert} />
    <br/><br/>
    <Button className="btn primary" type="primary" text="You can't click me!" disabled={"true"} />
    <br/><br/>
    <Button className="btn danger" type="danger" text="Click me!" onClick={alert} />
    <br/><br/>
    <Button className="btn danger" type="danger" text="You can't click me!" disabled={"true"} />

    <TodoList />
    <Clock />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
