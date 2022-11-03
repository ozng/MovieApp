import "./detailPoster.css";
import { Image } from "antd";
import moment from "moment";

const imageURL = process.env.REACT_APP_IMG_URL;

function DetailPoster({ detail }) {
  console.log(detail);
  return (
    <div className="detail-poster-container">
      <div className="detail-poster-image-container">
        <Image
          src={`${imageURL}/w500/${detail?.poster_path}`}
          className="detail-poster-image"
        />
      </div>
      <div className="detail-poster-details">
        <div>
          <h2 className="detail-poster-tagline">`{detail?.tagline}`</h2>

          <div className="detail-poster-genres-container">
            {detail?.genres &&
              detail?.genres.map((genre) => (
                <p key={genre.id} className="detail-poster-genre">
                  {genre.name}
                </p>
              ))}
          </div>

          <p className="detail-poster-overview">{detail?.overview}</p>
        </div>

        <div>
          <div className="detail-poster-release">
            <p className="detail-poster-release-title">Release Date : </p>
            <span className="detail-poster-info">
              {moment(detail?.release_date).format("LL dddd")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPoster;
