//props를 통해 여러가지 변수를 받을 수 있다.
const Myprops002 = (props) => {
  console.log(props);
  return (
    <div>
      <p>고객님</p>
      <p>이름: {props.name}</p>
      <p>나이: {props.age}</p>
      <p>지역: {props.loc}</p>
    </div>
  );
};

export default Myprops002;
