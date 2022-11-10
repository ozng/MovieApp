import "./detailCast.css";
import { Avatar, List } from "antd";
import { useNavigate } from "react-router-dom";
import DetailTitle from "../DetailTitle/DetailTitle";

const imageURL = process.env.REACT_APP_IMG_URL;

function DetailCast({ loading, data, title }) {
  const navigate = useNavigate();

  return (
    <div className="detail-cast-container">
      <DetailTitle title={title} />
      <div
        id="scrollableDiv"
        style={{
          height: 400,
          overflow: "auto",
          padding: "0 0.5rem",
          width: "100%",
        }}
        className="detail-cast-detail-container"
      >
        <List
          dataSource={data}
          renderItem={(cast, index) => (
            <List.Item
              onClick={() => navigate(`/person/${cast?.id}`)}
              key={index}
              className="detail-cast-list-item"
            >
              <List.Item.Meta
                avatar={
                  <Avatar
                    shape="circle"
                    size={80}
                    src={`${imageURL}/w185/${cast?.profile_path}`}
                  />
                }
                title={
                  <p className="detail-cast-list-title">
                    {title === "Cast" ? cast?.character : cast?.name}
                  </p>
                }
                description={
                  title === "Cast" ? cast?.name : cast?.known_for_department
                }
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default DetailCast;
