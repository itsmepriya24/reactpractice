import React from "react";
import { useState } from "react";

function Ifelse() {
  const [profile, setProfile] = useState(2);

  return (
    <div>
      <h3>Condition Rendering</h3>
      {profile==1 ? <p>Welcome User 1</p>
      : profile==2 ? <p>Welcome User 2</p> 
      : <p>Welcome Guest</p>}
    </div>
  );
}
export default Ifelse;
