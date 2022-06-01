import React from "react";

function Child(props){
    const data = "This is data from Child Component to the Parent Component.";
    return(
        <div>
            <h3>Child</h3>
            <p>{props.ParentToChild}</p>
            <button onClick={() => props.childToParent(data)}>Click Child</button>
        </div>
    )
}

export default Child;