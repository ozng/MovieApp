import "./peopleHeader.css";
import { Image } from "antd";
import { useSelector } from "react-redux";
import moment from "moment";

const imageURL = process.env.REACT_APP_IMG_URL;

function PeopleHeader() {
  const selectedPerson = useSelector((state) => state.people.selectedPerson);

  console.log(selectedPerson);

  return (
    <div className="people-header-container">
      <div className="people-header-image-container">
        <Image
          className="people-header-image"
          src={`${imageURL}/original/${selectedPerson?.profile_path}`}
        />
      </div>
      <div className="people-header-detail-container">
        <div className="people-header-detail-name-container">
          <h3 className="people-header-detail-name">{selectedPerson?.name}</h3>
          <span className="people-header-detail-job">
            {selectedPerson?.known_for_department}
          </span>
        </div>

        <div className="people-header-detail-bio-container">
          <p className="people-header-detail-bio">
            {selectedPerson?.biography}
          </p>
        </div>

        <div className="people-header-detail-born-container">
          <p className="people-header-detail-born-year">
            Born at {moment(selectedPerson?.birthday).format("LL")}
          </p>
          <p className="people-header-detail-born-place">
            {selectedPerson?.place_of_birth}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PeopleHeader;
