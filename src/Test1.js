import React from "react";
import { useState } from "react";

function Test1(props) {
  const [data, setData] = useState("");
  const [print, setPrint] = useState("");

  function Print() {
    setPrint(data);
  }
  return (
    <div>
      <h3>{props.name}</h3>
      <input type="text" onChange={(e) => setData(e.target.value)} />
      {print}
      <div>
        <button onClick={() => Print()}> Submit </button>
      </div>
    </div>
  );
}
export default Test1;
