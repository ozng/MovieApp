import "./detailPoster.css";
import { Image } from "antd";
import moment from "moment";
import { useSelector } from "react-redux";
import StreamCard from "../StreamCard/StreamCard";

const imageURL = process.env.REACT_APP_IMG_URL;

function DetailPoster({ detail }) {
  const streams = useSelector((state) => state.movie.selectedMovieProviders);
  console.log(streams);
  return (
    <div className="detail-poster-container">
      <div className="detail-poster-image-container">
        <Image
          src={`${imageURL}/original/${detail?.poster_path}`}
          className="detail-poster-image"
        />
      </div>
      <div className="detail-poster-details">
        <div>
          <h2 className="detail-poster-tagline">`{detail?.tagline}`</h2>

          <div className="detail-poster-genres-container">
            {detail?.genres &&
              detail?.genres.map((genre, index) => (
                <p key={index} className="detail-poster-genre">
                  {genre.name}
                </p>
              ))}
          </div>

          <p className="detail-poster-overview">{detail?.overview}</p>
        </div>

        <div className="detail-poster-provider-container">
          <div className="detail-poster-provider-item">
            <div className="detail-poster-provider-title-container">
              {streams?.flatrate && (
                <h3 className="detail-poster-provider-title">Watch</h3>
              )}
            </div>
            <div className="detail-poster-provider-image">
              {streams?.flatrate?.map((stream, index) => (
                <StreamCard key={index} stream={stream} />
              ))}
            </div>
          </div>
          <div className="detail-poster-provider-item">
            <div className="detail-poster-provider-title-container">
              {streams?.rent && (
                <h3 className="detail-poster-provider-title">Rent</h3>
              )}
            </div>
            <div className="detail-poster-provider-image">
              {streams?.rent?.map((stream, index) => (
                <StreamCard key={index} stream={stream} />
              ))}
            </div>
          </div>

          <div className="detail-poster-provider-item">
            <div className="detail-poster-provider-title-container">
              {streams?.buy && (
                <h3 className="detail-poster-provider-title">Buy</h3>
              )}
            </div>
            <div className="detail-poster-provider-image">
              {streams?.buy?.map((stream, index) => (
                <StreamCard key={index} stream={stream} />
              ))}
            </div>
          </div>
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
