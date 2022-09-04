const swapMovieList = (moviesEntries) => moviesEntries.reduce(
  (acc, [key, value]) => {
    acc[value] = key;
    return acc;
  },
  {},
);

/**
  * Swaps movies keys with values
  * @param {Object} Movies - movie list
  * @returns {Object} formattedMovies
*/
const formatMovies = (Movies) => {
  const moviesEntries = Object.entries(Movies);
  const formattedMovies = swapMovieList(moviesEntries);

  return formattedMovies;
};

module.exports = formatMovies;
