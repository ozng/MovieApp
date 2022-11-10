import { useNavigate } from "react-router-dom";
import "./header.css";
import { SearchOutlined } from "@ant-design/icons";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchedMovies } from "../../store/actions/movie";

function Header() {
  const navigation = useNavigate();
  const inputRef = useRef();
  const dispatch = useDispatch();

  const onSearch = async (e) => {
    e.preventDefault();
    dispatch(fetchSearchedMovies(inputRef?.current?.value));
    navigation("/category-detail/searchedMovies");
  };

  return (
    <div className="header-container">
      <a href="/" className="header-logo">
        MYMDB
      </a>

      <div className="header-search-container">
        <form onSubmit={onSearch}>
          <input
            placeholder="Search movies"
            type="text"
            className="header-search-input"
            ref={inputRef}
          />
        </form>
        <SearchOutlined className="header-search-icon" onClick={onSearch} />
      </div>

      <div className="header-user-section">
        <img
          className="header-user-avatar"
          alt="user-avatar"
          src="https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <p className="header-user-name">OznG</p>
      </div>
    </div>
  );
}

export default Header;
