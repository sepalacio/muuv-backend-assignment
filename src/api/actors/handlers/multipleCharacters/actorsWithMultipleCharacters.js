const NodeCache = require('node-cache');

const MovieDatabase = require('../../../../lib/movieDatabase');
const errorHandler = require('../../../../utils/errorHandler');
const swapObjectProps = require('../../../../utils/swapObjectProps');
const { Movies } = require('../../../../data');
const filterByAppearances = require('./filterByAppearances');

const cacheExpiryTime = 3600;
const Cache = new NodeCache();
const selectedMoviesIds = ['1771', '166424', '284054', '9738'];

const getMovieIds = (movieList) => Object.keys(movieList);

const isSelectedMovie = (movieId) => selectedMoviesIds.includes(movieId);

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
    let actors = Cache.get('actorsMultipleCharacters');

    if (!actors) {
      const movieList = swapObjectProps(Movies);
      const moviesIds = getMovieIds(movieList).filter(isSelectedMovie);
      const movieDetailRequests = moviesIds.map(getMovieDetailRequest);
      const movieDetails = await resolveMoviesDetails(movieDetailRequests);
      actors = movieDetails.reduce(filterByAppearances(movieList), {});
      Cache.set('actorsMultipleCharacters', actors, cacheExpiryTime);
    }

    sendResponse(res, actors);
  } catch (error) {
    next(errorHandler(error));
  }
};

module.exports = getActorsWithMultipleCharacters;
