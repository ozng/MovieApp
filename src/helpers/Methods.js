import { getUserLocale } from "get-user-locale";

export const getUserLocaleHandler = () => {
  const userLocale = getUserLocale();

  return userLocale.slice(0, 2).toUpperCase();
};

export const setCategoryTitleHandler = (selectedCategory) => {
  let categoryTitle = "";
  let categoryIsSet = true;

  if (selectedCategory === "upcoming") {
    categoryTitle = "Upcoming";
  } else if (selectedCategory === "topRated") {
    categoryTitle = "Top Rated";
  } else if (selectedCategory === "nowPlaying") {
    categoryTitle = "Now Playin";
  } else if (selectedCategory === "searchedMovies") {
    categoryTitle = "Searched";
  } else if (selectedCategory === "similarMovies") {
    categoryTitle = "Similar";
  } else {
    categoryIsSet = false;
  }

  return {
    categoryTitle,
    categoryIsSet,
  };
};
