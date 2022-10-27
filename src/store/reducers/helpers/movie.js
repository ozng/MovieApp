export const setPopularMoviesPicturesHandler = (popularMovies) => {
  let popularMoviesPicture = [];
  for (const key in popularMovies) {
    popularMoviesPicture.push(popularMovies[key].backdrop_path);
  }

  return popularMoviesPicture;
};
