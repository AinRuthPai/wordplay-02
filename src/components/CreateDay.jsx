import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function CreateDay() {
  const days = useFetch(`http://localhost:3001/days`);
  const navigate = useNavigate();

  function addDay() {
    fetch(`http://localhost:3001/days`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        day: days.length + 1,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("생성이 완료되었습니다!");
        navigate("/");
      }
    });
  }
  return (
    <>
      <h3>현재 일수 : {days.length}</h3>
      <button onClick={addDay}>날짜 추가하기</button>
    </>
  );
}

export default CreateDay;
