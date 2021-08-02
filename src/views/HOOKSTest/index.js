import React, { useState, useEffect } from 'react';

export default function HOOKSTest() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([1, 2]);
  const [userList, setUserList] = useState(['lee', 'wang']);

  useEffect(() => {
    let timer = setTimeout(() => {
      setUserList([...userList, 'cheng']);
      console.log('+++++++++');
      clearTimeout(timer);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <p>点击次数：{count}</p>
      <button onClick={() => setCount(count + 1)}>按钮</button>
      <hr />
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={() => setList([1, 2, 3, 4])}>按钮</button>
      <hr />
      <ul>
        {userList.map((user, idx) => (
          <li key={idx}>{user}</li>
        ))}
      </ul>
    </div>
  );
}