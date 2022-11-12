import "./peopleImages.css";
import { Image } from "antd";
import { imageURL } from "../../../constants/Api";

function PeopleImages({ data }) {
  return (
    <div className="people-images-container">
      {data?.map((image, index) => (
        <Image
          key={index}
          className="people-images-image"
          src={`${imageURL}/original/${image?.file_path}`}
        />
      ))}
    </div>
  );
}

export default PeopleImages;
