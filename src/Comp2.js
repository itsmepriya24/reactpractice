import React from 'react';
import {useState} from 'react';

function Comp2(props)
{
    const mydata = props.ParentToChild;
    const[data,setData]= useState('');
    const[checks,setChecks]= useState('');
    const {ParentToChild} = props;
    if(mydata != checks){
        setData(ParentToChild);
        setChecks(ParentToChild);
    }
    return(
            <div style={{float:'left'}}>
                <label>Value of component 2</label> <input type="text"  value={data} onChange={(e)=>setData(e.target.value)} /><br></br><br></br>
                <button type="submit" onClick={() => props.childToParent2(data)}>Update</button><button type="button">Reset</button>
            </div>
    )
}
export default Comp2;