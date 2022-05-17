import React from "react";
import {useState} from "react";

function Hide_show()
{
    const[status,setStatus] = useState(false);
    return(  
        <div>
            <h3>Test 3</h3>
            {
                status? <p>Testing hide/show</p> :null
            }

            <button onClick = { ()=>setStatus(!status) }>Toggle</button>
            {/* <button onClick = { ()=>setStatus(false) }> Hide </button>
            <button onClick = { ()=>setStatus(true) }>Show </button> */}
        </div>
    )
}
export default Hide_show;