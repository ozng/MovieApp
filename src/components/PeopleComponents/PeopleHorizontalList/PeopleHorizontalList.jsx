import { useSelector } from "react-redux";
import PeopleCard from "../../Cards/PeopleCard/PeopleCard";
import DetailTitle from "../../DetailComponents/DetailTitle/DetailTitle";
import "./peopleHorizontalList.css";

function PeopleHorizontalList() {
  const popularPersons = useSelector((state) => state.people.popularPersons);

  return (
    <>
      <DetailTitle title="Popular People" />
      <div className="people-horizontal-list-container">
        {popularPersons | (popularPersons?.length > 0) &&
          popularPersons.map((people, index) => (
            <PeopleCard key={index} people={people} />
          ))}
      </div>
    </>
  );
}

export default PeopleHorizontalList;
