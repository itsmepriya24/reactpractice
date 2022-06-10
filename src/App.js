import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Test1 from "./Test1.js";
// import Test2 from "./Test2.js";
// import Hide_show from "./Hide_show";
// import Form from "./Form";
// import Ifelse from "./Ifelse";
// import Assignment from "./Assignment";
// import Assignment2 from "./Assignment2";
// import User from "./User";
// import Parent from "./Parent";
// import Classcomp1 from "./Classcomp1";
// import Page from "./Page";
import SecondComponent from "./SecondComponent";
import FirstComponent from "./FirstComponent";
import Form1 from "./Form1";
import Showform1 from "./Showform1";


function App() {
  const[name,setName] = React.useState('Priya');
  function getData(){
    alert('Hello from App');
  }

  return (
    <div className="App">
      {/* <h1>React</h1> */}
      {/* <Assignment /> */}
      {/* <Assignment2 /> */}
      {/* <Parent /> */}
      {/* <Test1 name="Onclick Event"/> */}
      {/* <Test2 /> */}
      {/* <Hide_show /> */}
      {/* <Form /> */}
      {/* <Ifelse /> */}
      {/* <User getdata={getData} /> */}
      {/* <Classcomp1 name={name} />
      <button onClick={()=>setName('Test')}>Click</button> */}
      {/* <Page /> */}

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstComponent />} />
          <Route path="/second" element={<SecondComponent />} />
        </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form1 />} />
          <Route path="/show" element={<Showform1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
