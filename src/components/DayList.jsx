import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DayList() {
  const [days, setDays] = useState([]);

  // 첫 번째 인자로 무조건 함수를 받는다.
  // 함수가 호출된 타이밍 : 렌더링 결과가 실제 DOM에 반영된 직후, 컴포넌트가 사라지기 직전에도 마지막으로 호출됨
  // 하지만 매번 상태가 변경 될 때마다 불필요하게 함수가 호출될 수 있다.
  // 두 번째 매개변수에 배열을 넣으면(의존성 배열) 그 배열의 상태가 변경될 때에만 함수가 실행된다.(빈 배열은 최초 렌더링에만 실행된다)
  // 여기서는 API 호출을 위해 useEffect 사용
  useEffect(() => {
    // API 비동기 통신을 위해 fetch()를 사용
    // API 경로를 통해 Promise 반환
    fetch(`http://localhost:3001/days`)
      .then((res) => {
        // 여기서 res는 http 응답이므로 json() 메소드를 사용한다.
        // 이렇게 되면 json으로 변환되고 Promise를 반환한다.
        return res.json();
      })
      .then((data) => {
        setDays(data);
      });
  }, []);

  return (
    <ul className='list_day'>
      {/* map : 배열을 받아서 또 다른 배열을 반환해주는 반복문 */}
      {days.map((day) => {
        return (
          <li key={day.id}>
            <Link to={`/day/${day.day}`}>Day {day.day}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default DayList;
