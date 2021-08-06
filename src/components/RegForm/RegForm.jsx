import React, { useState } from "react";
import "./register-form.css";

const InputStatus = {
  READY: "  ",
  SUCCESS: "",
  NUMERROR: "나이는 1부터 100 사이여야 합니다.",
  STRERROR: "이름은 1글자 이상, 10글자 이하여야 합니다.",
};

function RegForm() {
  // 에러 메시지 상태를 정의하고, 상태 관리를 하는 코드를 작성하세요.
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const [nameInputStatus, setNameInputStatus] = useState(InputStatus.READY);
  const [ageInputStatus, setAgeInputStatus] = useState(InputStatus.READY);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };

  const vaildateName = (name) => {
    if (name.length < 1 || name.length > 10) {
      setNameInputStatus(InputStatus.STRERROR);
      return;
    }
    setNameInputStatus(InputStatus.SUCCESS);
  };

  const vaildateAge = (age) => {
    if (parseInt(age) < 1 || parseInt(age) > 100) {
      setAgeInputStatus(InputStatus.NUMERROR);
      return;
    }
    setAgeInputStatus(InputStatus.SUCCESS);
  };

  const submitForm = () => {
    console.log("Submit form!");
    vaildateName(name);
    vaildateAge(age);
  };

  const resetForm = () => {
    setName("");
    setAge("");
    setNameInputStatus(InputStatus.READY);
    setAgeInputStatus(InputStatus.READY);
  };

  const getInputStyle = (status) => {
    if (status === InputStatus.SUCCESS) {
      return "input-valid";
    } else if (status === InputStatus.READY) {
      return "input-ready";
    } else {
      return "input-invalid";
    }
  };
  // name과 age에 따라 에러 메시지를 출력하는 코드를 작성하세요.
  // 그리고 name과 age의 값을 비우는 초기화 버튼도 구현해보세요.

  return (
    <form className="regFormCSS">
      <fieldset>
        <label
          className={`form-label ${
            nameInputStatus === InputStatus.STRERROR ? "text-error" : ""
          } `}
          htmlFor="name"
        >
          이름
        </label>
        <input
          onChange={handleChangeName}
          className={`form-input ${getInputStyle(nameInputStatus)}`}
          value={name}
          type="text"
          name="name"
          id="name"
          placeholder="이름을 입력해 주세요."
        />
        <div className="text-error form-error">{nameInputStatus}</div>
      </fieldset>

      <fieldset>
        <label
          className={`form-label ${
            ageInputStatus === InputStatus.NUMERROR ? "text-error" : ""
          } `}
          htmlFor="age"
        >
          나이
        </label>
        <input
          onChange={handleChangeAge}
          className={`form-input ${getInputStyle(ageInputStatus)}`}
          value={age}
          type="number"
          name="age"
          id="age"
          placeholder="나이를 입력해 주세요."
        />
        <div className="text-error form-error">{ageInputStatus}</div>
      </fieldset>

      <div>
        <button onClick={resetForm} type="button">
          초기화
        </button>
        <button onClick={submitForm} type="button">
          제출
        </button>
      </div>
      <pre className="debug">
        <code>{JSON.stringify({ name, age }, null, 2)}</code>
      </pre>
    </form>
  );
}

export default RegForm;
