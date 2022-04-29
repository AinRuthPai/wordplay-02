import { useNavigate } from "react-router-dom";

function CreateDay({ data }) {
  const navigate = useNavigate();

  function addDay() {
    fetch(`http://localhost:3001/days/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        day: data.days.length + 1,
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
      <h3>현재 일수 : {data.days.length}</h3>
      <button onClick={addDay}>날짜 추가하기</button>
    </>
  );
}

export default CreateDay;
