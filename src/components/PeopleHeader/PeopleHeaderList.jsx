import "./peopleHeaderList.css";

function PeopleHeaderList({ label, title, also_known_as }) {
  const maxLength = also_known_as?.length;
  console.log(maxLength);

  return (
    <div className="people-header-list-container">
      <h3 className="people-header-list-title">{title}</h3>
      {also_known_as ? (
        also_known_as.map((item, index) => (
          <div className="people-header-list-label-container">
            <span className="people-header-list-label">
              {item} {maxLength === index + 1 ? "" : ", "}
            </span>
          </div>
        ))
      ) : (
        <span className="people-header-list-label">{label}</span>
      )}
    </div>
  );
}

export default PeopleHeaderList;
