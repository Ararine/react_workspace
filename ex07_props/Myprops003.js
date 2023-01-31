//default 값을 설정할 수 있다.
const Myprops003 = ({ name = "아무개", age = 10, loc = "서울" }) => {
  return (
    <div>
      <p>고객님</p>
      <p>이름: {name}</p>
      <p>나이: {age}</p>
      <p>지역: {loc}</p>
    </div>
  );
};

export default Myprops003;
