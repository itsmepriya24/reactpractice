import "./App.css";
import React from "react";
import Test1 from "./Test1.js";
import Test2 from "./Test2.js";
import Hide_show from "./Hide_show";
import Form from "./Form";
import Ifelse from "./Ifelse";
import Assignment from "./Assignment";
import User from "./User";

function App() {
  function getData(){
    alert('Hello from App');
  }

  return (
    <div className="App">
      <h1>React</h1>
      <Assignment />
      {/* <Test1 name="Onclick Event"/>
      <Test2 />
      <Hide_show />
      <Form />
      <Ifelse /> */}
      {/* <User data={getData} /> */}
    </div>
  );
}

export default App;
