const knownActors = [
  'Chris Evans',
  'Michael B. Jordan',
];

const isKnownActor = (actor) => knownActors.includes(actor.name);

const existsInMoreThanOneMovie = (actor) => {
  const slashRegex = /\//;
  const minAppearances = 2;

  return actor.character?.split(slashRegex, minAppearances).length > 1;
};

const hasMultipleAppearances = (actor) => isKnownActor(actor) && existsInMoreThanOneMovie(actor);

const initializeActor = (actorName, actors) => {
  if (!actors[`${actorName}`]) {
    // eslint-disable-next-line no-param-reassign
    actors[`${actorName}`] = [];
  }
};

const buildActorsList = (movieName, actors) => ({ name: actorName, character: characterName }) => {
  initializeActor(actorName, actors);
  actors[`${actorName}`].push({ movieName, characterName });

  return actors;
};

/**
  * Selects only the Actors that performed more than one character
  * in a single movie
  * @param {Object} movieList - movie list

  * @param {Object} actorsMultipleCharacters - Accumulator with actors that satisfy the criteria
  * @param {Object} movieDetail - Current value from reducer with the Movie details
  * @param {String} movieDetail.id
  * @param {Array} movieDetail.cast
  * @returns {Object} actorsMultipleCharacters - Actors that performed more than one character
*/
const filterByAppearances = (movieList) => (actorsMultipleCharacters, movieDetail) => {
  const movieName = movieList[movieDetail.id];

  movieDetail.cast
    .filter(hasMultipleAppearances)
    .map(buildActorsList(movieName, actorsMultipleCharacters));

  return actorsMultipleCharacters;
};

module.exports = filterByAppearances;
