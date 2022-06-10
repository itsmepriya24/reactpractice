import React from 'react';
import {useState} from 'react';
import Comp2 from './Comp2';
import Comp3 from './Comp3';

function Assignment2()
{
    const[comp2,setComp2]= useState('');
    const[comp3,setComp3]= useState('');

    const[data2,setData2]= useState('');
    const[data3,setData3]= useState('');

    const ParentToChild = () =>{
        setData2(comp2);
        setData3(comp3);
    }

    const childToParent2 = (childdata) => {
        setData2(childdata);
        setComp2(childdata);
    }
    const childToParent3 = (childdata) => {
        setData3(childdata);
        setComp3(childdata);
    }
   
    return(
        
        <div>
            <h3>Assignment</h3>
            <div>
                <label>Value of component 2</label> <input type="text" value={comp2} onChange={(e)=>setComp2(e.target.value)}/><br></br><br></br>
                <label>Value of component 3</label> <input type="text" value={comp3} onChange={(e)=>setComp3(e.target.value)}/><br></br><br></br>
                
                <button type="submit" onClick={()=>ParentToChild()}>Submit</button>
            </div>
            <div>
                <Comp2 childToParent2={childToParent2} ParentToChild={data2} />
            
                <Comp3 childToParent3={childToParent3} ParentToChild={data3} />
            </div>
        </div>
    )
}
export default Assignment2;