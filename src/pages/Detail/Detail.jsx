import "./detail.css";
import Header from "../../components/Header/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getDetail,
  fetchSimilarMovies,
  fetchMovieCast,
} from "../../store/actions/movie";
import useFetch from "../../hooks/useFetch";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import DetailHeader from "../../components/DetailHeader/DetailHeader";
import DetailPoster from "../../components/DetailPoster/DetailPoster";
import DetailBudget from "../../components/DetailBudget/DetailBudget";
import DetailMedia from "../../components/DetailMedia/DetailMedia";
import HorizontalList from "../../components/HorizontalList/HorizontalList";
import DetailCast from "../../components/DetailCast/DetailCast";
import Footer from "../../components/Footer/Footer";
import { scrollToTop } from "../../helpers/UIHandlers";

function Detail() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const params = useParams();

  const movieID = params.id;

  const { loading, data } = useFetch(`/movie/${movieID}`);

  const { data: similarMovies } = useFetch(`/movie/${movieID}/similar`);

  const { data: movieCredits, loading: movieCreditsLoading } = useFetch(
    `/movie/${movieID}/credits`
  );

  const similar = useSelector((state) => state.movie.similarMovies);

  const movieDetail = useSelector((state) => state.movie.selected);

  const castInfo = useSelector((state) => state.movie.selectedMovieCast);

  console.log(castInfo);

  useEffect(() => {
    dispatch(getDetail(data));
    dispatch(fetchSimilarMovies(similarMovies?.results));
    dispatch(fetchMovieCast(movieCredits));
    scrollToTop();
  }, [dispatch, data, similarMovies, movieCredits]);

  return (
    <div>
      <Header />
      {loading ? (
        <div className="detail-center">
          <Spin indicator={<LoadingOutlined />} />
        </div>
      ) : (
        <div className="detail-container">
          <DetailHeader detail={movieDetail} />
          <DetailPoster detail={movieDetail} />
          <DetailBudget detail={movieDetail} />
          <DetailMedia movieID={movieID} />
          <div className="detail-p-t detail-cast-crew">
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
          <div className="detail-p-t">
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
