import "./detailBudget.css";
import { Tabs } from "antd";
import DetailBudgetList from "./DetailBudgetList";

function DetailBudget({ detail }) {
  const budgetData = [
    { title: "Budget", name: detail?.budget },
    {
      title: "Revenue",
      name: detail?.revenue,
    },
  ];

  const options = [
    {
      label: <h4 className="detail-budget-label-title">Budget</h4>,
      key: "b",
      children: <DetailBudgetList data={budgetData} />,
    },
    {
      label: <h4 className="detail-budget-label-title">Languages</h4>,
      key: "l",
      children: <DetailBudgetList data={detail?.spoken_languages} />,
    },
    {
      label: (
        <h4 className="detail-budget-label-title">Production Companies</h4>
      ),
      key: "pc",
      children: <DetailBudgetList data={detail?.production_companies} />,
    },
    {
      label: (
        <h4 className="detail-budget-label-title">Production Countries</h4>
      ),
      key: "pcountry",
      children: <DetailBudgetList data={detail?.production_countries} />,
    },
  ];

  return (
    <div className="detail-budget-container">
      <Tabs defaultActiveKey="1" items={options} />
    </div>
  );
}

export default DetailBudget;
