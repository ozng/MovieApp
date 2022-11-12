import { Image, Popover } from "antd";
import "./streamCard.css";
import { imageURL } from "../../../constants/Api";

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
