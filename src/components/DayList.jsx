import data from "../db/data.json";
import { Link } from "react-router-dom";

function DayList() {
  return (
    <ul className='list_day'>
      {/* map : 배열을 받아서 또 다른 배열을 반환해주는 반복문 */}
      {data.days.map((day) => {
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
