import { Link } from "react-router-dom";

function Header() {
  return (
    <header className='header'>
      <h1>
        <Link to='/'> 영단어장 </Link>
      </h1>
      <ul className='menu'>
        <li>
          <Link to='#' className='link'>
            단어 추가
          </Link>
        </li>
        <li>
          <Link to='#' className='link'>
            날짜 추가
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
