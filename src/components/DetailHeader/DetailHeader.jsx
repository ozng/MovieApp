import "./detailHeader.css";
import moment from "moment";
import { Rate } from "antd";

function DetailHeader({ detail }) {
  return (
    <div className="detail-header-container">
      <div className="detail-header-title-container">
        <h2 className="detail-header-title">{detail?.title}</h2>
        <div className="detail-header-title-detail-container">
          <p className="detail-header-detail">
            {moment(detail?.release_date).format("YYYY")}
          </p>
          <span className="detail-header-dot">&#183;</span>
          <span className="detail-header-detail">
            {Math.trunc(detail?.runtime / 60)}h {detail?.runtime % 60}m
          </span>
        </div>
      </div>
      <div className="detail-header-vote-container">
        <Rate
          tooltips={detail.vote_average / 2}
          className="detail-header-rate"
          allowHalf
          disabled
          defaultValue={detail.vote_average / 2}
        />
        <span className="detail-header-vote">
          {(detail.vote_average / 2).toFixed(1)}
        </span>
        <span className="detail-header-vote-count">{`(${detail.vote_count}) vote`}</span>
      </div>
    </div>
  );
}

export default DetailHeader;
