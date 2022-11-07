import "./detail.css";
import Header from "../../components/Header/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDetail, fetchSimilarMovies } from "../../store/actions/movie";
import useFetch from "../../hooks/useFetch";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import DetailHeader from "../../components/DetailHeader/DetailHeader";
import DetailPoster from "../../components/DetailPoster/DetailPoster";
import DetailBudget from "../../components/DetailBudget/DetailBudget";
import DetailMedia from "../../components/DetailMedia/DetailMedia";
import HorizontalList from "../../components/HorizontalList/HorizontalList";

function Detail() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const params = useParams();

  const movieID = params.id;

  const { loading, data } = useFetch(`/movie/${movieID}`);

  const { data: similarMovies } = useFetch(`/movie/${movieID}/similar`);

  const similar = useSelector((state) => state.movie.similarMovies);
  console.log(similar);

  const movieDetail = useSelector((state) => state.movie.selected);

  useEffect(() => {
    dispatch(getDetail(data));
    dispatch(fetchSimilarMovies(similarMovies?.results));
  }, [dispatch, data, similarMovies]);

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
    </div>
  );
}

export default Detail;
