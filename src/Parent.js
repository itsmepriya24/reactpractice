import React from "react";
import Child from "./Child";
import { useState } from "react";

function Parent(){
    const[data,setData] = useState('');

    const ParentToChild = () =>{
        setData('This data is from parent');
    }

    const childToParent = (childdata) => {
        setData(childdata);
    }
    

    return(
        <div>
            <h3>Parent</h3>
            <p>{data}</p>
            <button onClick={()=>ParentToChild()}>Click Parent</button>
            <Child childToParent={childToParent} ParentToChild={data} />
        </div>
    )
}

export default Parent;