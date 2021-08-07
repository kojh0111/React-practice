import React, { useState } from "react";
import "./ChangeObject.css";

function RTcal() {
  const [fnum, setFnum] = useState(0);
  const [rnum, setRnum] = useState(0);

  return (
    <div className="RTcal">
      <div>
        <input onChange={(e) => setFnum(e.target.value)} value={fnum}></input>
        <input onChange={(e) => setRnum(e.target.value)} value={rnum}></input>
      </div>
      <p>
        두 숫자의 합은 {parseInt(fnum) + parseInt(rnum)}이며 차는{" "}
        {parseInt(fnum) - parseInt(rnum)}이고 곱은{" "}
        {parseInt(fnum) * parseInt(rnum)}입니다.
      </p>
    </div>
  );
}

export default RTcal;
