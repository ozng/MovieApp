import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-list-container">
        <ul className="footer-list">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://developers.themoviedb.org/3/getting-started"
            className="footer-list-link"
          >
            <li className="footer-list-item">API - TMDB</li>
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="mailto:ozangurer12@gmail.com"
            className="footer-list-link"
          >
            <li className="footer-list-item">Contact via mail</li>
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/ozng"
            className="footer-list-link"
          >
            <li className="footer-list-item">Git Hub</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
