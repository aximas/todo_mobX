import React from "react";
import {store} from "./store";
import Todo from "./components/Todo/Todo";
import "./App.scss";

function App() {
  return (
    <div className="app-wrapper">
        <Todo store={store} />
    </div>
  );
}

export default App;
