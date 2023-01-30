import { useState } from "react";

const MyuseState003 = () => {
  const [names, setNames] = useState(["고수", "여진구", "송중기"]);
  const [input, setInput] = useState("");
  const handleChangeName = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const handleClick = (e) => {
    // setNames([input, ...names]); //전체가 렌더링
    setNames([...names, input]); //input 값만 렌더링
    setInput("");
  };

  // 이 부분 위로는 js 부분이라 if, for문 가능하지만 아래는 jsx 부분이라 map, reduce, filter를 사용해야 한다.

  return (
    <div>
      <input type="text" id="fname" onChange={handleChangeName} value={input} />
      <button onClick={handleClick}>ADD</button>
      {/* map 사용시 {}와 return이 필요 */}
      {/* {names.map((value, index) => {
        return <p key={index}>{value}</p>;
      })} */}
      {names.map((value, index) => (
        <p key={index}>{value}</p>
      ))}
    </div>
  );
};

export default MyuseState003;
