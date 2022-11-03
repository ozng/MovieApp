import "./detailBudgetList.css";
import { Avatar } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const imageURL = process.env.REACT_APP_IMG_URL;

function DetailBudgetList({ data }) {
  return (
    <div>
      {data.map((item) => (
        <div className="detail-budget-list-container">
          {item?.logo_path && (
            <Avatar
              shape="square"
              size={32}
              src={`${imageURL}/w92/${item?.logo_path}`}
              className="detail-budget-list-avatar"
            />
          )}
          {item?.logo_path === null && (
            <Avatar
              shape="square"
              size={32}
              className="detail-budget-list-avatar"
              icon={<CloseOutlined />}
            />
          )}
          <p className="detail-budget-list-title">
            {item?.title}{" "}
            <span className="detail-budget-list-label">
              {typeof item?.name === "number"
                ? new Intl.NumberFormat().format(item?.name)
                : item?.name}
              {item.english_name && ` (${item?.english_name})`}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default DetailBudgetList;
