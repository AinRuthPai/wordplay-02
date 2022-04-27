// 각 컴포넌트마다 state를 가지고 있다.
// 뜻 보기 버튼을 눌렀을 때 상태가 변하는 것은 단어 하나에만
// 해당하는 것이니까 따로 컴포넌트를 제작해 주는 것이 좋다.

import { useState } from "react";

function Word(props) {
  const [isShow, setIsShow] = useState(false);

  // 뜻 보기 버튼을 눌렀을 때 실행되는 함수
  function toggleShow() {
    // isShow를 반대값으로
    setIsShow(!isShow);
  }
  return (
    // props로 key값을 받아오므로 여기서 key값을 작성하지 않아도 된다.
    <tr>
      <td>
        <input type='checkbox' />
      </td>
      <td>{props.word.eng}</td>
      {/* isShow일때에만 뜻을 보여준다 */}
      <td>{isShow && props.word.kor}</td>
      <td>
        <button onClick={toggleShow}>뜻 보기</button>
        <button className='btn_del'>삭제</button>
      </td>
    </tr>
  );
}

export default Word;
