import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FirstComponent() {
    const[data1,setData1] = useState('');
    const[data2,setData2] = useState('');
    const[data3,setData3] = useState('');

    let navigate = useNavigate();

    function localstorage(){
        localStorage.setItem("inputname", data1);
        navigate("/second");
    }

    function urlparam(){
      var str = '/second?data='+data2;
      navigate(str);
    }

  return (
    <div>
      <div>
        <input type="text" onChange={(e)=>setData1(e.target.value)} />
        <button onClick={()=>localstorage()}>LocalStorage</button>
      </div>
      <div>
        <input type="text" onChange={(e)=>setData2(e.target.value)} />
        <button onClick={()=>urlparam()}>Urlparam</button>
      </div>
    </div>
  );
}
export default FirstComponent;
