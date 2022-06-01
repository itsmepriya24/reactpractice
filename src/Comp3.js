import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React from 'react';
import {useState} from 'react';

function Comp3(props)
{
    const mydata = props.ParentToChild;
    const[data,setData]= useState(mydata);
    
    return(
            <div style={{float:'right'}}>
                <label>Value of component 3</label> <input type="text" value={mydata} onChange={(e)=>setData(e.target.value)}/><br></br><br></br>
                <button type="submit" onClick={() => props.childToParent3(data)}>Update</button><button type="button">Reset</button>
            </div>
    )
}
export default Comp3;