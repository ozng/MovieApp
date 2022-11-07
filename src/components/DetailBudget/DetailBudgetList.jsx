import "./detailBudgetList.css";
import { Image } from "antd";

const imageURL = process.env.REACT_APP_IMG_URL;

function DetailBudgetList({ data }) {
  return (
    <>
      {data.map((item) => (
        <div key={item.key} className="detail-budget-list-container">
          {item?.logo_path && (
            <Image
              src={`${imageURL}/w92/${item?.logo_path}`}
              className="detail-budget-list-avatar"
            />
          )}
          {item?.logo_path === null && (
            <div className="detail-budget-list-avatar detail-budget-no-avatar">
              <span className="detail-budget-no-avatar-label">No Image</span>
            </div>
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
    </>
  );
}

export default DetailBudgetList;
