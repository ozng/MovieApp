import SearchInput from "../../SearchInput/SearchInput";
import "./header.css";

function Header() {
  return (
    <div className="header-container">
      <a href="/" className="header-logo">
        MYMDB
      </a>

      <div className="header-search-container">
        <SearchInput />
      </div>

      <div className="header-user-section">
        <img
          className="header-user-avatar"
          alt="user-avatar"
          src="https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <p className="header-user-name">username</p>
      </div>
    </div>
  );
}

export default Header;
