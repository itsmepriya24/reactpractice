import './App.css';
import React from "react";
import Test1 from './Test1.js';
import Test2 from "./Test2.js";
import Hide_show from "./Hide_show";
import Form from "./Form";

function App() {
  return (
    <div className="App">
     <h1>React</h1>
      <Test1 name="Test 1"/>
      <Test2 />
      <Hide_show />
      <Form />
    </div>
  );
}


export default App;
