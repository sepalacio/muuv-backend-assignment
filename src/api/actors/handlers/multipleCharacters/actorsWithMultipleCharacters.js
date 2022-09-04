const MovieDatabase = require('../../../../lib/movieDatabase');
const errorHandler = require('../../../../utils/errorHandler');
const { Movies } = require('../../../../data');
const formatMovies = require('./formatMovies');
const filterByAppearances = require('./filterByAppearances');

const getMovieIds = (movieList) => Object.keys(movieList);

const getMovieDetailRequest = (movieId) => MovieDatabase({
  method: 'get',
  path: `movie/${movieId}/credits`,
});

const resolveMoviesDetails = (movieDetailRequests) => Promise.all(movieDetailRequests);

const sendResponse = (res, actors) => res.status(200).json(actors);

/**
* @param {Object}  req   - Express request object
* @param {Object}  res - Express response object
* @param {requestCallback} next
*/
const getActorsWithMultipleCharacters = async (req, res, next) => {
  try {
    const movieList = formatMovies(Movies);
    const moviesIds = getMovieIds(movieList);
    const movieDetailRequests = moviesIds.map(getMovieDetailRequest);
    const movieDetails = await resolveMoviesDetails(movieDetailRequests);
    const actors = movieDetails.reduce(filterByAppearances(movieList), {});

    sendResponse(res, actors);
  } catch (error) {
    next(errorHandler(error));
  }
};

module.exports = getActorsWithMultipleCharacters;
