import "./people.css";
import { useEffect } from "react";
import Header from "../../components/Header/Header";

import { useParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import { fetchDetail } from "../../store/actions/people";

import useFetch from "../../hooks/useFetch";
import PeopleHeader from "../../components/PeopleHeader/PeopleHeader.";

function People() {
  const dispatch = useDispatch();

  const { id: personID } = useParams();

  const { data: personDetails } = useFetch(`/person/${personID}`);

  useEffect(() => {
    dispatch(fetchDetail(personDetails));
  }, [dispatch, personID, personDetails]);

  return (
    <>
      <Header />
      <div className="people-container">
        <PeopleHeader />
      </div>
    </>
  );
}

export default People;
