import React from 'react';
import {useState} from 'react';

function Comp2(props)
{
    const mydata = props.ParentToChild;
    const[data,setData]= useState('');
    if(mydata !== data){
        alert('hi');
    }
    return(
            <div style={{float:'left'}}>
                <label>Value of component 2</label> <input type="text"  value={mydata} onChange={(e)=>setData(e.target.value)} /><br></br><br></br>
                <button type="submit" onClick={() => props.childToParent2(data)}>Update</button><button type="button">Reset</button>
            </div>
    )
}
export default Comp2;