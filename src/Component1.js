import React from "react";
import { useNavigate } from "react-router-dom";

function Component1(){
    
    const myObj = {
        name: 'Ross',
        writing: true,
        enjoyment: 10,
        meta: {
          minutesWriting: 20,
          minutesProcrastinating: 0,
        }
      };
      const navigat11 = useNavigate();
    function call(){
        localStorage.setItem('myObj', JSON.stringify(myObj));
        console.log(myObj);
        //navigat11("/component2");
    }

    return(
        <div>
            <p>Component 1</p>
            <button onClick={()=>call()}>Component 2</button>
        </div>
    )
}

export default Component1;