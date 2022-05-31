import React from "react";
import { useState } from "react";

function User(props){
    
    return(
        <div>
            <h3>Pass function as props</h3>

            <button onClick={()=>props.data()}>Call Data Function</button>
            {/* <button onClick={props.data}>Call Data Function</button> */}
        </div>
    )
}
export default User;