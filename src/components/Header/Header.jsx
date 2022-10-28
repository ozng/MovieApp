import "./header.css";

function Header() {
  return (
    <div className="header-container">
      <h1 className="header-logo">MYMDB</h1>
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
