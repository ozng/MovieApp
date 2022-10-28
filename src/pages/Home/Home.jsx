import "./home.css";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import { useDispatch, useSelector } from "react-redux";
import {
  getPopular,
  getNowPlaying,
  getTopRated,
  getUpcoming,
} from "../../store/actions/movie";
import { useEffect } from "react";
import HorizontalList from "../../components/HorizontalList/HorizontalList";

function Home() {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.movie.popular);
  const upcomingMovies = useSelector((state) => state.movie.upcoming);
  const topRatedMovies = useSelector((state) => state.movie.topRated);
  const nowPlayingMovies = useSelector((state) => state.movie.nowPlaying);

  useEffect(() => {
    dispatch(getPopular());
    dispatch(getNowPlaying());
    dispatch(getTopRated());
    dispatch(getUpcoming());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="home-slider-container">
        <Slider popularMovies={popularMovies} />
      </div>
      <div className="home-slider-list-container home-margin">
        <HorizontalList movieList={upcomingMovies} title="Upcoming" />
      </div>
      <div className="home-slider-list-container home-margin home-m-t">
        <HorizontalList movieList={topRatedMovies} title="Top Rated" />
      </div>
      <div className="home-slider-list-container home-margin home-m-t">
        <HorizontalList movieList={nowPlayingMovies} title="Now Playing" />
      </div>
    </>
  );
}

export default Home;
