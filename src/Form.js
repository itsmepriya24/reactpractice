import React from 'react';
import {useState} from 'react';

function Form()
{
    const[name,setName] = useState();
    const[language,setlanguage] = useState();
    const[check,setcheckbox] = useState();

    function getFormdata(e)
    {
        alert('Name - '+name +','+'Language -'+language +','+'Checkbox - '+check);
        e.preventDefault();
    }
return(
    <div>
        <h3>Test 4</h3>
        <form onSubmit={getFormdata}>
            <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
            <br></br><br></br>
            <select onChange={(e)=>setlanguage(e.target.value)}>
                <option>Hindi</option>
                <option>English</option>
                <option>Punjabi</option>
            </select>
            <br></br>
            <input type="checkbox" onChange={(e)=>setcheckbox(e.target.checked)}/> Accept T&C
            <br></br>
            <button type="submit">Submit</button>
        </form>
    </div>
)
}
export default Form;