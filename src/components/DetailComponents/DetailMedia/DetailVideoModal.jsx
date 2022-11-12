import { Modal } from "antd";
import "./detailVideoModal.css";
import useFetch from "../../../hooks/useFetch";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchVideos } from "../../../store/actions/movie";
import { useState } from "react";
import DetailVideoCollapse from "./VideoCollapse/DetailVideoCollapse";

function DetailVideoModal({ isModalOpen, handleOk, handleCancel, movieID }) {
  const { data, loading } = useFetch(`/movie/${movieID}/videos`);

  const [teasers, setTeasers] = useState([]);
  const [bts, setBts] = useState([]);
  const [featurred, setFeaturred] = useState([]);
  const [trailers, setTrailers] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideos(data));

    setTeasers(
      data?.results.filter(
        (movie) => (movie.type === "Teaser") & (movie.site === "YouTube")
      )
    );
    setBts(
      data?.results.filter(
        (movie) =>
          (movie.type === "Behind the Scenes") & (movie.site === "YouTube")
      )
    );
    setFeaturred(
      data?.results.filter(
        (movie) => (movie.type === "Featurette") & (movie.site === "YouTube")
      )
    );
    setTrailers(
      data?.results.filter(
        (movie) => (movie.type === "Trailer") & (movie.site === "YouTube")
      )
    );
  }, [data, dispatch, movieID]);

  return (
    <>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        width={10000}
        className="detail-video-modal"
      >
        <div className="detail-video-modal-container">
          {loading ? (
            <div>
              <h2 className="detail-video-modal-loading-title">Loading...</h2>
            </div>
          ) : (
            <div className="detail-video-modal-video-container">
              {trailers?.length > 0 && (
                <p className="detail-video-modal-video-title">Trailers</p>
              )}
              {trailers &&
                trailers.map((video, index) => (
                  <DetailVideoCollapse key={index} video={video} />
                ))}

              {teasers?.length > 0 && (
                <p className="detail-video-modal-video-title">Teasers</p>
              )}
              {teasers &&
                teasers.map((video, index) => (
                  <DetailVideoCollapse key={index} video={video} />
                ))}

              {bts?.length > 0 && (
                <p className="detail-video-modal-video-title">
                  Behind The Scenes
                </p>
              )}
              {bts &&
                bts.map((video, index) => (
                  <DetailVideoCollapse key={index} video={video} />
                ))}

              {featurred?.length > 0 && (
                <p className="detail-video-modal-video-title">Featurred</p>
              )}
              {featurred &&
                featurred.map((video, index) => (
                  <DetailVideoCollapse key={index} video={video} />
                ))}
            </div>
          )}
        </div>
      </Modal>
    </>
  );
}

export default DetailVideoModal;
