import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h3>요청하신 페이지를 찾을 수 없습니다.</h3>
      <Link to='/'>돌아가기</Link>
    </div>
  );
}

export default NotFound;
