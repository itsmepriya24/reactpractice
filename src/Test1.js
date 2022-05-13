import React from "react";

function Test1()
{
    function calltest1()
    {
    
    }
    return(
        <div>
         <h3>Test1</h3>
         <input type="text" id="name1" />
        <label id="label1"></label>
        <button onClick={calltest1}>Submit</button>
        </div>
    )
}
export default Test1;