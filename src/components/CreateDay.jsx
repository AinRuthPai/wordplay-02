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

  function delDay() {
    fetch(`http://localhost:3001/days/`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        day: data.days.length - 1,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("삭제가 완료되었습니다!");
        navigate("/");
      }
    });
  }
  //   fetch(`http://localhost:3001/days/${data.days.day}`, {
  //     method: "DELETE",
  //   }).then((res) => {
  //     let arr = Math.max(data.days.day);
  //     console.log(arr);
  //     if (arr) {
  //       data.days.day = 0;
  //     }
  //   });
  // }
  // if (data.days.day === 0) {
  //   return null;
  // }

  return (
    <>
      <h3>현재 일수 : {data.days.length}</h3>
      <button onClick={addDay}>날짜 추가하기</button>
      <button onClick={delDay}>날짜 삭제하기</button>
    </>
  );
}

export default CreateDay;
