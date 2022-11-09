import "./peopleImages.css";
import { Image } from "antd";

const imageURL = process.env.REACT_APP_IMG_URL;

function PeopleImages({ data }) {
  return (
    <div className="people-images-container">
      {data?.map((image) => (
        <Image
          className="people-images-image"
          src={`${imageURL}/original/${image?.file_path}`}
        />
      ))}
    </div>
  );
}

export default PeopleImages;
