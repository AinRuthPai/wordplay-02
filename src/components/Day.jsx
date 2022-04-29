import { useParams, useNavigate } from "react-router-dom";
import data from "../db/data.json";
import Word from "./Word";

function Day() {
  const navigate = useNavigate();
  // url에 포함된 값을 얻을 때 useParams Hook을 사용한다.
  const { dayId } = useParams();
  // filter 메소드를 통해서 단어들을 해당 날짜에 맞게 반환한다.
  // dayId에서 string을 반환하므로 Number로 변경해 주어야 한다.
  const wordList = data.words.filter((word) => word.day === Number(dayId));

  function deleteDay() {
    if (window.confirm("정말 삭제하시겠습니까? 단어는 해당 날짜에 그대로 남아있게 됩니다.")) {
      fetch(`http://localhost:3001/days/${data.days[dayId - 1].id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          data.days[dayId - 1].id = 0;
          navigate("/");
        }
      });
    }
  }

  if (data.days[dayId - 1].id === 0) {
    return null;
  }
  return (
    <>
      <h2>Day {dayId}</h2>
      <button className='btn_delete_day' onClick={deleteDay}>
        날짜 삭제하기
      </button>
      <table>
        <tbody>
          {wordList.map((word) => {
            return <Word word={word} key={word.id} />;
          })}
        </tbody>
      </table>
    </>
  );
}

export default Day;
