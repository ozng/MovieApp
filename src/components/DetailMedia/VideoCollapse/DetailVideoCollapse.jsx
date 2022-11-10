import { Collapse } from "antd";
import "./detailVideoCollapse.css";

function DetailVideoCollapse({ video }) {
  return (
    <div key={video.id} className="detail-video-modal-trailer-container">
      <Collapse>
        <Collapse.Panel header={video?.name}>
          <div className="detail-video-modal-youtube-container">
            <iframe
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/${video?.key}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        </Collapse.Panel>
      </Collapse>
    </div>
  );
}

export default DetailVideoCollapse;
