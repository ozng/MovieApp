import "./detailImageModal.css";
import { Modal, Image } from "antd";
import useFetch from "../../../hooks/useFetch";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages } from "../../../store/actions/movie";
import { imageURL } from "../../../constants/Api";

function DetailImageModal({ isModalOpen, handleOk, handleCancel, movieID }) {
  const { data, loading } = useFetch(`/movie/${movieID}/images`);

  const dispatch = useDispatch();

  const selectedImages = useSelector(
    (state) => state.movie.selectedMovieImages
  );

  useEffect(() => {
    dispatch(fetchImages(data));
  }, [dispatch, movieID, data]);

  return (
    <>
      <Modal
        footer={false}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className="detail-image-modal"
        width={10000}
      >
        {loading ? (
          <div>
            <h2 className="detail-image-modal-loading-title">Loading...</h2>
          </div>
        ) : (
          <div className="detail-image-modal-container">
            <h2 className="detail-image-modal-title">
              Backdrops{" "}
              {`(${
                selectedImages?.backdrops && selectedImages?.backdrops.length
              })`}
            </h2>
            <div className="detail-image-modal-image-container">
              {selectedImages?.backdrops &&
                selectedImages?.backdrops.map((image, index) => (
                  <Image
                    key={index}
                    className="detail-image-modal-image"
                    src={`${imageURL}/w1280/${image?.file_path}`}
                  />
                ))}
            </div>

            <h2 className="detail-image-modal-title">
              Posters{" "}
              {`(${selectedImages?.posters && selectedImages?.posters.length})`}
            </h2>
            <div className="detail-image-modal-image-container">
              {selectedImages?.posters &&
                selectedImages?.posters.map((image, index) => (
                  <Image
                    key={index}
                    className="detail-image-modal-image"
                    src={`${imageURL}/w1280/${image?.file_path}`}
                  />
                ))}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}

export default DetailImageModal;
