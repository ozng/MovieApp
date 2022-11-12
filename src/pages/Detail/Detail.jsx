import "./detail.css";

import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getDetail,
  fetchSimilarMovies,
  fetchMovieCast,
  fetchMovieProviders,
} from "../../store/actions/movie";
import useFetch from "../../hooks/useFetch";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import DetailHeader from "../../components/DetailComponents/DetailHeader/DetailHeader";
import DetailPoster from "../../components/DetailComponents/DetailPoster/DetailPoster";
import DetailBudget from "../../components/DetailComponents/DetailBudget/DetailBudget";
import DetailMedia from "../../components/DetailComponents/DetailMedia/DetailMedia";
import HorizontalList from "../../components/HorizontalList/HorizontalList";
import DetailCast from "../../components/DetailComponents/DetailCast/DetailCast";
import Header from "../../components/Common/Header/Header";
import Footer from "../../components/Common/Footer/Footer";
import { scrollToTop } from "../../helpers/UIHandlers";
import { getUserLocaleHandler } from "../../helpers/Methods";

function Detail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const userLocale = getUserLocaleHandler();

  const movieID = params.id;

  const { loading, data } = useFetch(`/movie/${movieID}`);

  const { data: similarMovies } = useFetch(`/movie/${movieID}/similar`);

  const { data: movieCredits, loading: movieCreditsLoading } = useFetch(
    `/movie/${movieID}/credits`
  );

  const { data: watchProviders } = useFetch(
    `/movie/${movieID}/watch/providers`
  );

  const similar = useSelector((state) => state.movie.similarMovies);

  const movieDetail = useSelector((state) => state.movie.selected);

  const castInfo = useSelector((state) => state.movie.selectedMovieCast);

  const providers = useSelector((state) => state.movie.selectedMovieProviders);
  console.log(providers);

  useEffect(() => {
    dispatch(getDetail(data));
    dispatch(fetchSimilarMovies(similarMovies?.results));
    dispatch(fetchMovieCast(movieCredits));
    dispatch(fetchMovieProviders(watchProviders?.results[userLocale]));
    scrollToTop();
  }, [dispatch, data, similarMovies, movieCredits, watchProviders, userLocale]);

  return (
    <div>
      <Header />
      {loading ? (
        <div className="loading-centered">
          <Spin indicator={<LoadingOutlined />} />
        </div>
      ) : (
        <div className="m-x-5">
          <DetailHeader detail={movieDetail} />
          <DetailPoster detail={movieDetail} />
          <DetailBudget detail={movieDetail} />
          <DetailMedia movieID={movieID} />
          <div className="p-t-1 detail-cast-crew">
            <DetailCast
              title="Cast"
              loading={movieCreditsLoading}
              data={castInfo?.cast}
            />
            <DetailCast
              title="Crew"
              loading={movieCreditsLoading}
              data={castInfo?.crew}
            />
          </div>
          <div className="p-t-1">
            {similar?.length > 0 && (
              <HorizontalList
                movieList={similar}
                title="Similar Movies"
                onClickTitle={() => navigate(`/category-detail/similarMovies`)}
              />
            )}
          </div>
        </div>
      )}
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default Detail;
