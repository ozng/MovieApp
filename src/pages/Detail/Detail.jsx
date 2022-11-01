import "./detail.css";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDetail } from "../../store/actions/movie";
import useFetch from "../../hooks/useFetch";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useEffect } from "react";

function Detail() {
  const dispatch = useDispatch();

  const params = useParams();

  const movieID = params.id;

  const { loading, data } = useFetch(`/movie/${movieID}`);

  const movieDetail = useSelector((state) => state.movie.selected);

  useEffect(() => {
    dispatch(getDetail(data));
  }, [movieID, dispatch, data]);

  return (
    <div>
      <Header />
      {loading ? (
        <div className="detail-center">
          <Spin indicator={<LoadingOutlined />} />
        </div>
      ) : (
        <div>
          <h1>{movieDetail?.title}</h1>
        </div>
      )}
    </div>
  );
}

export default Detail;
