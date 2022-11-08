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
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function Home() {
  const dispatch = useDispatch();

  const { data: popularMovieData, loading: popularMoviesLoading } =
    useFetch("/movie/popular");
  const { data: upcomingMovieData, loading: upcomingMovieLoading } =
    useFetch("/movie/upcoming");
  const { data: topRatedMovieData, loading: topRatedMovieLoading } =
    useFetch("/movie/top_rated");
  const { data: nowPlayingMovieData, loading: nowPlayingMovieLoading } =
    useFetch("/movie/now_playing");

  const popularMovies = useSelector((state) => state.movie.popular);
  const upcomingMovies = useSelector((state) => state.movie.upcoming);
  const topRatedMovies = useSelector((state) => state.movie.topRated);
  const nowPlayingMovies = useSelector((state) => state.movie.nowPlaying);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPopular(popularMovieData?.results));
    dispatch(getNowPlaying(upcomingMovieData?.results));
    dispatch(getTopRated(topRatedMovieData?.results));
    dispatch(getUpcoming(nowPlayingMovieData?.results));
  }, [
    dispatch,
    popularMovieData,
    upcomingMovieData,
    topRatedMovieData,
    nowPlayingMovieData,
  ]);

  const navigateToCategoryListHandler = (categoryName) => {
    navigate(`/category-detail/${categoryName}`);
  };

  return (
    <>
      <Header />
      <>
        <div className="home-slider-container">
          <Slider
            popularMovies={popularMovies}
            isLoading={popularMoviesLoading}
          />
        </div>
        <div className="home-slider-list-container home-margin">
          <HorizontalList
            movieList={upcomingMovies}
            isLoading={upcomingMovieLoading}
            title="Upcoming"
            onClickTitle={() => navigateToCategoryListHandler("upcoming")}
          />
        </div>
        <div className="home-slider-list-container home-margin home-m-t">
          <HorizontalList
            movieList={topRatedMovies}
            isLoading={topRatedMovieLoading}
            title="Top Rated"
            onClickTitle={() => navigateToCategoryListHandler("topRated")}
          />
        </div>
        <div className="home-slider-list-container home-margin home-m-t">
          <HorizontalList
            movieList={nowPlayingMovies}
            isLoading={nowPlayingMovieLoading}
            title="Now Playing"
            onClickTitle={() => navigateToCategoryListHandler("nowPlaying")}
          />
        </div>
      </>
    </>
  );
}

export default Home;
