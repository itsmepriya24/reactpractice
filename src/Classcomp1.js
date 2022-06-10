import React from 'react';

function Classcomp1(props)
{
    console.log('running');
    
    return(
        <div>
            <h1>Class Component 1 {props.name}</h1>
        </div>
    )
}
export default Classcomp1;