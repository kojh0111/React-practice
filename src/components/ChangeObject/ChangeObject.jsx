import React, { useState } from "react";
import "./ChangeObject.css";

function ChangeObject() {
  const [data, setData] = useState({
    name: "",
    age: 20,
    school: "",
  });

  const handleChange = (e) => {
    setData((current) => ({ ...current, [e.target.name]: e.target.value }));
  };

  return (
    <div className="ChangeObject">
      <div>
        <input onChange={handleChange} name="name" value={data.name} />
        <input onChange={handleChange} name="school" value={data.school} />
        <input onChange={handleChange} name="age" value={data.age} />
      </div>
      <p>
        {data.name}님은 {data.school}에 재학 중이며 현재 {data.age}세입니다.
      </p>
    </div>
  );
}

export default ChangeObject;
