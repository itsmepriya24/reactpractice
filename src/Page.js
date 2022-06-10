import React from 'react';
import { useState } from "react";

function Page()
{
    const[data,setData] = useState('');

    function newpage(){
        // alert(data);
        localStorage.setItem("imputname", data);
        window.location.reload();
    }
    
    return(
        <div>
            <input type="text" onChange={(e)=>setData(e.target.value)}/>
            <button onClick={newpage}>Click</button>
        </div>
    )
}
export default Page;