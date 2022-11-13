import "./detailTitle.css";
import { RightOutlined } from "@ant-design/icons";

function DetailTitle({ title, onClickTitle, clickable, fontSize }) {
  return (
    <div className="detail-title-container">
      <h2
        className={
          clickable
            ? "detail-title-clickable detail-title-title"
            : "detail-title-title"
        }
        style={{
          fontSize,
        }}
        onClick={onClickTitle}
      >
        {title}
      </h2>
      {clickable && <RightOutlined className="detail-title-icon" />}
    </div>
  );
}

export default DetailTitle;
