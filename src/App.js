import React from "react";
import {store} from "./store";
import Todo from "./components/Todo/Todo";
import "./App.scss";

function App() {
  return (
    <div className="app-wrapper">
        <Todo store={store} />
      {/*{console.log(JSON.stringify(store))}*/}
      {/*{console.log(getSnapshot(store))}*/}
    </div>
  );
}

export default App;
