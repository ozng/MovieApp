import "./people.css";
import { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PersonMovieCredit from "../../components/PersonMovieCredit/PersonMovieCredit";
import DetailTitle from "../../components/DetailTitle/DetailTitle";

import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchDetail,
  fetchProfileImages,
  fetchTaggedImages,
  fetchPersonMovieCredit,
} from "../../store/actions/people";

import useFetch from "../../hooks/useFetch";
import PeopleHeader from "../../components/PeopleHeader/PeopleHeader.";
import PeopleImages from "../../components/PeopleImages/PeopleImages";
import { scrollToTop } from "../../helpers/UIHandlers";

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
  const { data: personMovieCredit } = useFetch(
    `/person/${personID}/movie_credits`
  );

  useEffect(() => {
    dispatch(fetchDetail(personDetails));
    dispatch(fetchProfileImages(personProfileImages));
    dispatch(fetchTaggedImages(personTaggedImages));
    dispatch(fetchPersonMovieCredit(personMovieCredit));
    scrollToTop();
  }, [
    dispatch,
    personID,
    personDetails,
    personProfileImages,
    personTaggedImages,
    personMovieCredit,
  ]);

  return (
    <>
      <Header />
      <div className="people-container">
        <PeopleHeader />
        {selectedPeopleProfileImage?.profiles?.length > 0 && (
          <>
            <DetailTitle title="Profile Pictures" />
            <PeopleImages data={selectedPeopleProfileImage?.profiles} />
          </>
        )}
        {selectedPeopleTaggedImage?.results?.length > 0 && (
          <>
            <DetailTitle title="Tagged Pictures" />
            <PeopleImages data={selectedPeopleTaggedImage?.results} />
          </>
        )}

        <DetailTitle title="Movies" />
        <PersonMovieCredit />
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </>
  );
}

export default People;
