import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function CreateWord({ data }) {
  const navigate = useNavigate();
  function onSubmit(event) {
    event.preventDefault();
    fetch(`http://localhost:3001/words/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        // 문자형으로 받아져서 정상적으로 출력되지 않아 숫자형으로 변경
        // current : DOM 요소에 접근
        day: Number(dayRef.current.value),
        eng: engRef.current.value,
        kor: korRef.current.value,
        isDone: false,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("생성 완료!");
        navigate("/");
      }
    });
  }

  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  return (
    <form onSubmit={onSubmit}>
      <div className='input_area'>
        <label>ENG</label>
        <input type='text' placeholder='ENG' ref={engRef} />
      </div>
      <div className='input_area'>
        <label>KOR</label>
        <input type='text' placeholder='KOR' ref={korRef} />
      </div>
      <div className='input_area'>
        <label>Day</label>
        <select ref={dayRef}>
          {data.days.map((day) => {
            return (
              <option key={day.id} value={day.day}>
                {day.day}
              </option>
            );
          })}
        </select>
      </div>
      <button>저장</button>
    </form>
  );
}

export default CreateWord;
