import "./detailMedia.css";
import DetailMediaCard from "./DetailMediaCard";
import { FileImageOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { useState } from "react";
import DetailImageModal from "./DetailImageModal";
import DetailVideoModal from "./DetailVideoModal";

function DetailMedia({ movieID }) {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleModal = (func) => {
    func((prevState) => !prevState);
  };

  return (
    <div className="detail-media-container">
      <DetailMediaCard
        title={"Images"}
        icon={<FileImageOutlined />}
        openModal={() => handleModal(setIsImageModalOpen)}
      />
      <DetailMediaCard
        title={"Videos"}
        icon={<VideoCameraOutlined />}
        openModal={() => handleModal(setIsVideoModalOpen)}
      />
      <DetailImageModal
        handleCancel={() => handleModal(setIsImageModalOpen)}
        isModalOpen={isImageModalOpen}
        handleOk={() => handleModal(setIsImageModalOpen)}
        movieID={movieID}
      />
      <DetailVideoModal
        handleCancel={() => handleModal(setIsVideoModalOpen)}
        isModalOpen={isVideoModalOpen}
        handleOk={() => handleModal(setIsVideoModalOpen)}
        movieID={movieID}
      />
    </div>
  );
}

export default DetailMedia;
