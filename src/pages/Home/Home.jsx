import "./home.css";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import { useDispatch, useSelector } from "react-redux";
import { getPopular } from "../../store/actions/movie";
import { useEffect } from "react";

function Home() {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.movie.popular);

  useEffect(() => {
    dispatch(getPopular());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="home-slider-container">
        <Slider popularMovies={popularMovies} />
      </div>
    </>
  );
}

export default Home;
