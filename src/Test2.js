import React from "react";
import { useState } from "react";

function Test2() {
  const [data, setData] = useState();
  function setTest2(val) {
    setData(val.target.value);
  }
  return (
    <div>
      <h3>Onchange Event</h3>
      <input type="text" onChange={setTest2} />
      <label>{data}</label>
    </div>
  );
}
export default Test2;
