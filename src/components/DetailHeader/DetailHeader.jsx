import "./detailHeader.css";
import moment from "moment";
import { Rate } from "antd";
import { useEffect, useState } from "react";

function DetailHeader({ detail }) {
  const [rate, setRate] = useState(0);

  const roundHalf = (num) => {
    return Math.round(num * 2) / 2;
  };

  useEffect(() => {
    setRate(roundHalf(+(detail?.vote_average / 2).toFixed(2)));
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
          defaultValue={rate}
          value={rate}
        />
        <span className="detail-header-vote">{rate}</span>
        <span className="detail-header-vote-count">{`(${rate}) vote`}</span>
      </div>
    </div>
  );
}

export default DetailHeader;
