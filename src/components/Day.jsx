import { useParams } from "react-router-dom";
import data from "../db/data.json";
import Word from "./Word";

function Day() {
  // url에 포함된 값을 얻을 때 useParams Hook을 사용한다.
  const { dayId } = useParams();
  // filter 메소드를 통해서 단어들을 해당 날짜에 맞게 반환한다.
  // dayId에서 string을 반환하므로 Number로 변경해 주어야 한다.
  const wordList = data.words.filter((word) => word.day === Number(dayId));

  return (
    <>
      <h2>Day {dayId}</h2>
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
