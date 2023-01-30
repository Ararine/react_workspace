import React, { Fragment } from "react";

const MyJsx002 = () => {
  return (
    //부모는 하나여야 한다.
    //의미가 없는 부모를 사용할 경우 Fragment를 사용한다.
    // <Fragment>
    <>
      <p>start</p>
      <span>!!!</span>
    </>
    /* </Fragment> */
  );
};

export default MyJsx002;
