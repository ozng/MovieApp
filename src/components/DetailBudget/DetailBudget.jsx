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
      label: "Budget",
      key: "b",
      children: <DetailBudgetList data={budgetData} />,
    },
    {
      label: "Languaes",
      key: "l",
      children: <DetailBudgetList data={detail?.spoken_languages} />,
    },
    {
      label: "Production Companies",
      key: "pc",
      children: <DetailBudgetList data={detail?.production_companies} />,
    },
    {
      label: "Production Countries",
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
