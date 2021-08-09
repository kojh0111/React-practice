import { useEffect, useState } from "react";
import "./New.css";

const New = () => {
  const [text, setText] = useState("");
  const [trans, setTrans] = useState("");

  useEffect(() => {
    // text가 없을 때, trans를 없애는 방법
    if (text === "") {
      setTrans("");
      return;
    }
    setTrans(text + "입니다.");
  }, [text]);

  return (
    <div className="New">
      <p>{trans}</p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default New;
