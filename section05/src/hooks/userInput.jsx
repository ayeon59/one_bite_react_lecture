import { useState } from "react";

//이름이 Use로만 시작하면 커스텀 훅이라고 판단함
function useInput() {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };
  return [input, onChange];
}

export default useInput;
