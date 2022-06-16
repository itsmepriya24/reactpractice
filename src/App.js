import './App.css';
import React from "react";
import Component1 from './Component1';
// import Component2 from './Component2';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <h1>React Practice</h1>
     < Component1 />

     {/* <BrowserRouter>
        <Routes>
          <Route path="/component2" element={<Component2 />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
