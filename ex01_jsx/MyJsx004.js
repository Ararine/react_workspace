const MyJsx004 = () => {
  const name = "react";
  return (
    <div>
      {/* 연산자 사용이 가능하다. */}
      {name === "react" ? <h1>리액트입니다.</h1> : <h1>리액트가 아닙니다.</h1>}
    </div>
  );
};

export default MyJsx004;
