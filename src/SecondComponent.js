import React from "react";
import { useNavigate } from "react-router-dom";

function SecondComponent() {
    let navigate = useNavigate();
    const inputname = localStorage.getItem("inputname");

    const queryParams = new URLSearchParams(window.location.search);
    const urldata = queryParams.get('data');

    function back(){
       navigate("/");
    }
    return (
        <div>
            {inputname?<p>hi,{inputname} <b>Using localstorage</b></p>:null}
            {urldata?<p>hi,{urldata}<b>Using URLparam</b></p>:null}
            
            <button onClick={()=>back()}>Go Back</button>
        </div>
    );
}
export default SecondComponent;
