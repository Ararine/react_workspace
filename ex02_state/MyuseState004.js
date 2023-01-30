import { useState } from "react";

const MyuseState004 = () => {
  const [customer, setCustomer] = useState({
    name: "고수",
    address: "서울시 강남구",
    phone: "010-000-0000",
  });

  const handleName = (e) => {
    setCustomer((prevState) => {
      // 이전의 값을 가져와야한다.
      return { ...prevState, name: e.target.value };
    });
  };

  const handleAddress = (e) => {
    setCustomer({ ...customer, address: e.target.value });
  };

  const handlePhone = (e) => {
    setCustomer({ ...customer, phone: e.target.value });
  };

  const handleCommit = (e) => {
    console.log(`${customer.name} ${customer.address} ${customer.phone}`);
  };

  return (
    <div>
      <p>
        <span>이름</span>
        {/* readOnly 혹은 onChange, onClick 같은 이벤트 속성을 넣지 않으면 입력이 되지 않는다. */}
        <input type="text" value={customer.name} onChange={handleName} />
      </p>

      <p>
        <span>주소</span>
        <input type="text" value={customer.address} onChange={handleAddress} />
      </p>

      <p>
        <span>전화</span>
        <input type="text" value={customer.phone} onChange={handlePhone} />
      </p>

      <button onClick={handleCommit}>확인</button>
    </div>
  );
};

export default MyuseState004;
