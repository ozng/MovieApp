import "./detailHeader.css";
import moment from "moment";
import { Rate } from "antd";
import { useEffect, useState } from "react";

function DetailHeader({ detail }) {
  const [rate, setRate] = useState(0);

  useEffect(() => {
    detail?.vote_average && setRate((detail?.vote_average).toFixed(2));
  }, [detail]);

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
          className="detail-header-rate"
          allowHalf
          disabled
          count={10}
          defaultValue={rate}
          value={rate}
        />
        <span className="detail-header-vote">{rate}</span>
        <span className="detail-header-vote-count">{`(${detail?.vote_count})`}</span>
      </div>
    </div>
  );
}

export default DetailHeader;
