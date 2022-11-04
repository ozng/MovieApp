import "./detailMediaCard.css";

function DetailMediaCard({ icon, title, openModal }) {
  return (
    <div onClick={openModal} className="detail-media-card-container">
      <h2 className="detail-media-card-title">{title}</h2>
      <div className="detail-media-card-icon-container">{icon}</div>
    </div>
  );
}

export default DetailMediaCard;
