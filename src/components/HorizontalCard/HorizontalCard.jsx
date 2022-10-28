import "./horizontalCard.css";

const imageURL = process.env.REACT_APP_IMG_URL;

function HorizontalCard({ movie }) {
  return (
    <div className="horizontal-card-container" key={movie.id}>
      <img
        src={`${imageURL}/w154/${movie.poster_path}`}
        alt="movie poster"
        className="horizontal-card-image"
      />
      <h3 className="horizontal-card-title">{movie.title}</h3>
    </div>
  );
}

export default HorizontalCard;
