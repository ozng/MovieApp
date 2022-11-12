import { Image, Popover } from "antd";
import "./streamCard.css";

const imageURL = process.env.REACT_APP_IMG_URL;

function StreamCard({ stream }) {
  return (
    <div className="stream-card-container">
      <Popover content={stream?.provider_name}>
        <Image
          className="stream-card-logo"
          src={`${imageURL}/original/${stream?.logo_path}`}
          preview={false}
        />
      </Popover>
    </div>
  );
}

export default StreamCard;
