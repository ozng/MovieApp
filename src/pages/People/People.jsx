import "./people.css";
import { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchDetail,
  fetchProfileImages,
  fetchTaggedImages,
} from "../../store/actions/people";

import useFetch from "../../hooks/useFetch";
import PeopleHeader from "../../components/PeopleHeader/PeopleHeader.";
import PeopleImages from "../../components/PeopleImages/PeopleImages";

function People() {
  const dispatch = useDispatch();

  const selectedPeopleTaggedImage = useSelector(
    (state) => state.people.selectedPersonTaggedImages
  );
  const selectedPeopleProfileImage = useSelector(
    (state) => state.people.selectedPersonProfileImages
  );

  const { id: personID } = useParams();

  const { data: personDetails } = useFetch(`/person/${personID}`);
  const { data: personProfileImages } = useFetch(`/person/${personID}/images`);
  const { data: personTaggedImages } = useFetch(
    `/person/${personID}/tagged_images`
  );

  console.log(selectedPeopleProfileImage);

  useEffect(() => {
    dispatch(fetchDetail(personDetails));
    dispatch(fetchProfileImages(personProfileImages));
    dispatch(fetchTaggedImages(personTaggedImages));
  }, [
    dispatch,
    personID,
    personDetails,
    personProfileImages,
    personTaggedImages,
  ]);

  return (
    <>
      <Header />
      <div className="people-container">
        <PeopleHeader />
        <PeopleImages data={selectedPeopleProfileImage?.profiles} />
        <PeopleImages data={selectedPeopleTaggedImage?.results} />
      </div>
      <Footer />
    </>
  );
}

export default People;
