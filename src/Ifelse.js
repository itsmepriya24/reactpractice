import React from 'react';
import {useState} from 'react';

function Ifelse()
{
    const[profile,setProfile] = useState(true);
    
    return(
        <div>
            <h4>Test 5</h4>
            {profile?<p>Welcome User</p>:<p>Welcome Guest</p>}
        </div>
    )
}
export default Ifelse;