import "./MyJsx003.css";

const MyJsx003 = () => {
  const numX = 3;
  const numY = 5;

  return (
    //자바스크립트 문법을 사용할 수 있다.
    //반드시 ``를 사용해야 한다.
    //react에서는 class 를 반드시 className으로 사용해야 한다.
    <>
      <div>{`${numX} + ${numY} = ${numX + numY}`}</div>
      <div className="line">Line Test</div>
    </>
  );
};

export default MyJsx003;
