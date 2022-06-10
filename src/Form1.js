import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form1(){
    let navigate = useNavigate();

    const formdata = {};
    const professional = {};
    const [personal, setPersonal] = useState();
    const [location, setLocation] = useState();
    const [english,setEnglish] = useState(false);
    const [hindi,setHindi] = useState(false);

    const setlanguage = (val,lan) => {
        let final;
        if(val == true){
            final = "true";
        }else{
            final = "false";
        }
        {lan == 'english' ? setEnglish(final) : setHindi(final)}
    }
    const handlePersonal = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setPersonal(values => ({...values, [name]: value}));
    }

    const handleLocation = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setLocation(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        personal.location = location;
        professional.language = {English:english, Hindi:hindi}
        
        formdata.personal = personal;
        formdata.professional = professional;
        // console.log(formdata);
        localStorage.setItem('formdata', JSON.stringify(formdata));
        navigate("/show");
    }

    return(
        <div>
            <h2>Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <h4>Personal Information</h4>
                    <div>
                        <label>Name </label>
                        <input type="text" name="name" onChange={handlePersonal} />
                    </div><br></br>

                    <div>
                        <label>Gender </label>
                        Male <input type="radio" name="gender" value="male" onChange={handlePersonal}/>
                        Female <input type="radio" name="gender" value="female" onChange={handlePersonal}/>
                    </div><br></br>
                
                    <div>
                        <label>State </label>
                        <select name="state" onChange={handleLocation}>
                            <option value="">Select state</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                        </select>
                    </div><br></br>

                    <div>
                        <label>Address </label>
                        <textarea name="address" onChange={handleLocation}></textarea>
                    </div><br></br>
                </div>
                
                <div>
                    <p>Profession Information</p>

                    <div>
                        <label>Languages Known </label><br></br>
                        English <input type="checkbox" name="language" value="English" onChange={(e) => setlanguage(e.target.checked,'english')} /><br></br>
                        Hindi <input type="checkbox" name="language" value="Hindi" onChange={(e) => setlanguage(e.target.checked,'hindi')} /><br></br>
                    </div><br></br>

                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Form1;