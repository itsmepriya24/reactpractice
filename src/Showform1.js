import React from "react";
import { useState } from "react";

function Showform1(){
    const formdata = JSON.parse(localStorage.getItem("formdata"));
    return(
        <div>
            <h3>Submitted Form's data</h3>
            <form>
                <div>
                    <p>Personal Information</p>

                    <div>
                        <label>Name </label>
                        <input type="text" name="name" value={formdata.personal.name} />
                    </div><br></br>

                    <div>
                        <label>Gender </label>
                        Male {formdata.personal.gender === 'male' ? <input type="radio" name="gender" checked value="male" /> :<input type="radio" name="gender" value="male" />}
                        Female {formdata.personal.gender === 'female' ? <input type="radio" name="gender" checked value="female" /> :<input type="radio" name="gender" value="female" />}
                    </div><br></br>
                
                    <div>
                        <label>State </label>
                        <select name="state">
                        <option value="">Select state</option>
                        {formdata.personal.location.state === 'Punjab' ? <option value="Punjab" selected>Punjab</option>: <option value="Punjab">Punjab</option>}
                        {formdata.personal.location.state === 'Haryana' ? <option value="Haryana" selected>Haryana</option>: <option value="Haryana">Haryana</option>}
                        {formdata.personal.location.state === 'Uttarakhand' ? <option value="Uttarakhand" selected>Uttarakhand</option>: <option value="Uttarakhand">Uttarakhand</option>}
                        
                        </select>
                    </div><br></br>

                    <div>
                        <label>Address </label>
                        <textarea name="address">{formdata.personal.location.address}</textarea>
                    </div><br></br>
                </div>
               
                <div>
                    <p>Profession Information</p>

                    <div>
                    <label>Languages Known </label><br></br>
                        English {formdata.professional.language.English === "true" ? <input type="checkbox" checked name="language" value="English"  /> :<input type="checkbox" name="language" value="English"  />}
                        Hindi {formdata.professional.language.Hindi === "true" ? <input type="checkbox" checked name="language" value="Hindi"  /> :<input type="checkbox" name="language" value="Hindi"  />}
                        
                    </div><br></br>

                </div>
                <div>
                    <button>Update</button>
                </div>
            </form>
        </div>
    )
}

export default Showform1;