import "./detailTitle.css";

function DetailTitle({ title, onClickTitle, clickable }) {
  return (
    <div className="detail-title-container">
      <h2
        className={
          clickable
            ? "detail-title-clickable detail-title-title"
            : "detail-title-title"
        }
        onClick={onClickTitle}
      >
        {title}
      </h2>
    </div>
  );
}

export default DetailTitle;
