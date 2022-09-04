const axios = require('axios');

const { MOVIE_DATABASE_API_KEY } = process.env;
const movieDatabaseConfig = {
  host: 'https://api.themoviedb.org',
  version: 3,
  language: 'en-US',
};

const getUrl = ({ host, version, language }, path) => (
  `${host}/${version}/${path}?api_key=${MOVIE_DATABASE_API_KEY}&language=${language}`
);

/**
 * Perform API request to the movie database service
 * @param {object} options
 * @param {string} options.method http verb 'get' 'post' 'put'
 * @param {string} options.path path to the desired api service
 * @param {object} options.data request data
 * @return {Promise<Object>}
 */
const MovieDatabase = async ({ method, path }) => {
  const url = getUrl(movieDatabaseConfig, path);
  const { data: response } = await axios({ method, url });

  return response;
};

module.exports = MovieDatabase;
