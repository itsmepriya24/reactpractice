import React from "react";
import {useState} from "react";

function Test1(props)
{
    const[data,setData] = useState();
    const[print,setPrint] = useState(false);

    function setTest1(val)
    {
        setData(val.target.value);
    } 
    
    return(     
        <div>
            <h3>{props.name}</h3>
            <input type="text" onChange={setTest1}/>
            {
                print?<label>{data}</label>:null
            }
            <div><button onClick={()=>setPrint(true)}> Submit </button></div>
        </div>
    )
}
export default Test1;