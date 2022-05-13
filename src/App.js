import './App.css';
import React from "react";
import Test1 from './Test1.js';

function App() {
  return (
    <div className="App">
     <h1>React</h1>
      <Test1 />
      <Test2 />
    </div>
  );
}

function Test2()
{
    return(
        <div>
            <h3>Test2</h3>
            <input type="text" id="name2" />
            <label id="label2"></label>
        </div>
    )
}
export default App;
