import { Link } from "react-router-dom";
import "./noCategory.css";

function NoCategory() {
  return (
    <>
      <p className="no-category-title no-category-text-center">!</p>
      <p className="no-category-1 no-category-text-center">
        You have not selected any category.
      </p>
      <p className="no-category-2 no-category-text-center">
        Please return to <Link to="/">Home Page</Link>.
      </p>
    </>
  );
}

export default NoCategory;
