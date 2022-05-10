// 각 컴포넌트마다 state를 가지고 있다.
// 뜻 보기 버튼을 눌렀을 때 상태가 변하는 것은 단어 하나에만
// 해당하는 것이니까 따로 컴포넌트를 제작해 주는 것이 좋다.

import { useState } from "react";

interface IProps {
  word: IWord;
}

export interface IWord {
  id: number;
  day: number;
  eng: string;
  kor: string;
  isDone: boolean;
}

function Word({ word: w }: IProps) {
  const [word, setWord] = useState(w);
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
      // JSON.stringify() 메소드는 JavaScript 값이나 객체를 JSON 문자열로 변환
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
    if (window.confirm("정말 삭제하시겠습니까?")) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: "DELETE",
      }).then((res) => {
        // DELETE만 사용해도 삭제되지만 후에 바로 재렌더링을 위해서 id를 0으로 바꾸고 null을 return한다
        if (res.ok) {
          alert("삭제가 완료되었습니다!");
          setWord({
            ...word,
            id: 0,
          });
        }
      });
    }
  }
  if (word.id === 0) {
    return null;
  }

  return (
    // props로 key값을 받아오므로 여기서 key값을 작성하지 않아도 된다.
    <tr className={isDone ? "off" : ""}>
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
