// import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import TodoApp from "./todo/todoApp";

class App extends React.Component {

  render() {

    return (
      <TodoApp />
    );

  }
}
export default App;
