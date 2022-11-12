import { useEffect } from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Common/Header/Header";
import Footer from "../../components/Common/Footer/Footer";
import Slider from "../../components/Slider/Slider";

import { useDispatch, useSelector } from "react-redux";
import {
  getPopular,
  getNowPlaying,
  getTopRated,
  getUpcoming,
} from "../../store/actions/movie";
import { fetchPopularPersons } from "../../store/actions/people";
import useFetch from "../../hooks/useFetch";

import HorizontalList from "../../components/HorizontalList/HorizontalList";
import PeopleHorizontalList from "../../components/PeopleComponents/PeopleHorizontalList/PeopleHorizontalList";
import { scrollToTop } from "../../helpers/UIHandlers";

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
  const { data: popularPeople } = useFetch("/person/popular");

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
    dispatch(fetchPopularPersons(popularPeople?.results));
    scrollToTop();
  }, [
    dispatch,
    popularMovieData,
    upcomingMovieData,
    topRatedMovieData,
    nowPlayingMovieData,
    popularPeople,
  ]);

  const navigateToCategoryListHandler = (categoryName) => {
    navigate(`/category-detail/${categoryName}`);
  };

  return (
    <>
      <Header />
      <div className="m-x-5">
        <div>
          <Slider
            popularMovies={popularMovies}
            isLoading={popularMoviesLoading}
          />
        </div>
        <div className="m-y-2">
          <PeopleHorizontalList />
        </div>
        <div className="m-y-2">
          <HorizontalList
            movieList={upcomingMovies}
            isLoading={upcomingMovieLoading}
            title="Upcoming"
            onClickTitle={() => navigateToCategoryListHandler("upcoming")}
          />
        </div>
        <div className="m-y-2">
          <HorizontalList
            movieList={topRatedMovies}
            isLoading={topRatedMovieLoading}
            title="Top Rated"
            onClickTitle={() => navigateToCategoryListHandler("topRated")}
          />
        </div>
        <div className="m-y-2">
          <HorizontalList
            movieList={nowPlayingMovies}
            isLoading={nowPlayingMovieLoading}
            title="Now Playing"
            onClickTitle={() => navigateToCategoryListHandler("nowPlaying")}
          />
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </>
  );
}

export default Home;
