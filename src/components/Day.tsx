import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Word, { IWord } from "./Word";
import { useNavigate } from "react-router-dom";

export interface IDay {
  day: number;
  id: number;
}

function Day() {
  // const [words, setWords] = useState([]);
  const navigate = useNavigate();

  // url에 포함된 값을 얻을 때 useParams Hook을 사용한다.
  const { dayId } = useParams<{ dayId: string }>();
  // filter 메소드를 통해서 단어들을 해당 날짜에 맞게 반환한다.
  // dayId에서 string을 반환하므로 Number로 변경해 주어야 한다.
  // const wordList = data.words.filter((word) => word.day === Number(dayId));

  // useEffect(() => {
  //   fetch(`http://localhost:3001/words?day=${dayId}`)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setWords(data);
  //     });
  // }, [dayId]);
  const words: IWord[] = useFetch(`http://localhost:3001/words?day=${dayId}`);
  // 날짜 삭제를 위해 days 추가
  const days: IDay[] = useFetch(`http://localhost:3001/days`);

  function deleteDay() {
    if (window.confirm("정말 삭제하시겠습니까? 단어는 해당 날짜에 그대로 남아있게 됩니다.")) {
      fetch(`http://localhost:3001/days/${days[Number(dayId) - 1].id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          days[Number(dayId) - 1].id = 0;
          navigate("/");
        }
      });
    }
  }

  return (
    <>
      <h2>Day {dayId}</h2>
      {/* api가 호출되지 않았다면 Loading 문구 출력 */}
      {words.length === 0 && <span>Loading...</span>}
      <button className='btn_delete_day' onClick={deleteDay}>
        날짜 삭제하기
      </button>
      <table>
        <tbody>
          {words.map((word) => {
            return <Word word={word} key={word.id} />;
          })}
        </tbody>
      </table>
    </>
  );
}

export default Day;
