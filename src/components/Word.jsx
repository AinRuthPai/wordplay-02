// 각 컴포넌트마다 state를 가지고 있다.
// 뜻 보기 버튼을 눌렀을 때 상태가 변하는 것은 단어 하나에만
// 해당하는 것이니까 따로 컴포넌트를 제작해 주는 것이 좋다.

import { useState } from "react";

function Word({ word }) {
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  // 뜻 보기 버튼을 눌렀을 때 실행되는 함수
  function toggleShow() {
    // isShow를 반대값으로
    setIsShow(!isShow);
  }

  function toggleDone() {
    // isShow를 반대값으로
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  }

  function del() {
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        alert("삭제가 완료되었습니다!");
        word.id = 0;
      }
    });
  }
  if (word.id === 0) {
    return null;
  }

  return (
    // props로 key값을 받아오므로 여기서 key값을 작성하지 않아도 된다.
    <tr className={isDone ? "off" : null}>
      <td>
        <input type='checkbox' checked={isDone} onChange={toggleDone} />
      </td>
      <td>{word.eng}</td>
      {/* isShow일때에만 뜻을 보여준다 */}
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>뜻 {isShow ? "숨기기" : "보기"}</button>
        <button className='btn_del' onClick={del}>
          삭제
        </button>
      </td>
    </tr>
  );
}

export default Word;
