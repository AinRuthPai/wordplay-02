import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function CreateWord() {
  const [isLoading, setIsLoading] = useState(false);
  const days = useFetch(`http://localhost:3001/days`);
  const navigate = useNavigate();

  function onSubmit(event) {
    event.preventDefault();

    if (!isLoading) {
      setIsLoading(true);
      fetch(`http://localhost:3001/words/`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          // 문자형으로 받아져서 정상적으로 출력되지 않아 숫자형으로 변경
          // current : 해당 요소에 접근
          day: Number(dayRef.current.value),
          eng: engRef.current.value,
          kor: korRef.current.value,
          isDone: false,
        }),
      }).then((res) => {
        if (res.ok) {
          alert("생성 완료!");
          // 단어를 생성한 해당 날짜로 이동
          navigate(`/day/${dayRef.current.value}`);
          setIsLoading(false);
        }
      });
    }
  }

  // useRef는 DOM에 접근 가능하게 해 준다. input의 value값을 얻기 위해 사용한다.
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
          {days.map((day) => {
            return (
              <option key={day.id} value={day.day}>
                Day {day.day}
              </option>
            );
          })}
        </select>
      </div>
      {/* isLoading이 true이면 loading문구 출력 & 투명도 0.3으로 조절 */}
      <button style={{ opacity: isLoading ? 0.3 : 1 }}>{isLoading ? "Loading..." : "저장"}</button>
    </form>
  );
}

export default CreateWord;
