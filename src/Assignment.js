import React from 'react';
import {useState} from 'react';

function Assignment()
{
    const[comp2,setComp2]= useState("");
    const[comp3,setComp3]=useState("");

    const[c2,setC2]= useState("");
    const[c3,setC3]=useState("");

    function setComp(){
        setC2(comp2);
        setC3(comp3);
    }

    function settingC2(){
        setComp2(c2);
    }

    function settingC3(){
        setComp3(c3);
    }

    function removingC2(){
        setC2("");
        setComp2("");
    }

    function removingC3(){
        setC3("");
        setComp3("");
    }

    return(
        <div>
            <div>
                <h3>Assignment</h3>
                <label>Value of component 2</label> <input type="text" value={comp2} onChange={(e)=>setComp2(e.target.value)}/><br></br><br></br>
                <label>Value of component 3</label> <input type="text" value={comp3} onChange={(e)=>setComp3(e.target.value)}/><br></br><br></br>
                <button type="submit" onClick={()=>setComp()}>Submit</button>
            </div>
            <div>
                <div style={{float:'left'}}>
                    <label>Value of component 2</label> <input type="text" value={c2} onChange={(e)=>setC2(e.target.value)} /><br></br><br></br>
                    <button type="submit" onClick={()=>settingC2()}>Update</button><button type="button" onClick={()=>removingC2()}>Reset</button>
                </div>
                <div style={{float:'right'}}>
                    <label>Value of component 3</label> <input type="text" value={c3} onChange={(e)=>setC3(e.target.value)} /><br></br><br></br>
                    <button type="submit" onClick={()=>settingC3()}>Update</button><button type="button" onClick={()=>removingC3()}>Reset</button>
                </div>
            </div>
        </div>
    )
}
export default Assignment;