import { useRef } from "react";
import "./searchInput.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";

import { fetchSearchedMovies } from "../../store/actions/movie";

function SearchInput() {
  const inputRef = useRef();

  const navigation = useNavigate();
  const dispatch = useDispatch();

  const onSearch = async (e) => {
    e.preventDefault();
    dispatch(fetchSearchedMovies(inputRef?.current?.value));
    navigation("/category-detail/searchedMovies");
  };

  return (
    <div className="search-input-container">
      <form onSubmit={onSearch}>
        <input
          placeholder="Search movies"
          type="text"
          className="search-input-input"
          ref={inputRef}
        />
      </form>
      <SearchOutlined className="search-input-icon" onClick={onSearch} />
    </div>
  );
}

export default SearchInput;
