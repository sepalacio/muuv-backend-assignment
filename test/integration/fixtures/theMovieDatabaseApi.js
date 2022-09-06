const nock = require('nock');
const { Movies } = require('../../../src/data');
const swapObjectProps = require('../../../src/utils/swapObjectProps');

const { MOVIE_DATABASE_API_KEY: apiKey } = process.env;

const castSample = {
  id: 1234,
  cast: [
    {
      name: 'Ioan Gruffudd',
      character: 'Reed Richards / Mr. Fantastic',
    },
  ],
};

const movieCreditsResponses = [
  castSample,
  castSample,
  {
    id: 1771, // Captain America: The First Avenger
    cast: [
      {
        name: 'Chris Evans',
        character: 'Steve Rogers / Captain America',
      },
      {
        name: 'Hugo Weaving',
        character: 'Johann Schmidt / Red Skull',
      },
    ],
  },
  castSample,
  {
    id: 9738, // Fantastic Four (2005)
    cast: [
      {
        name: 'Hugo Weaving',
        character: 'Johann Schmidt / Red Skull',
      },
      {
        name: 'Chris Evans',
        character: 'Johnny Storm / Human Torch',
      },
    ],
  },
  castSample,
  castSample,
  castSample,
  castSample,
  castSample,
  castSample,
  castSample,
  castSample,
  castSample,
  {
    id: 166424, // Fantastic Four (2015)
    cast: [
      {
        name: 'Michael B. Jordan',
        character: 'Johnny Storm / The Human Torch',
      },
    ],
  },
  castSample,
  castSample,
  castSample,
  castSample,
  {
    id: 284054, // Black Panther
    cast: [
      {
        name: 'Martin Freeman',
        character: 'Everett K. Ross',
      },
      {
        name: 'Michael B. Jordan',
        character: "N'Jadaka / Erik 'Killmonger' Stevens",
      },
    ],
  },
  castSample,
  castSample,
  castSample,
  castSample,
  castSample,
  castSample,
];

const movieCreditsNock = (movieId, index) => {
  const mockResponse = {
    id: movieCreditsResponses[index].id,
    cast: movieCreditsResponses[index].cast,
  };

  return nock('https://api.themoviedb.org')
    .get(`/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`)
    .reply(200, mockResponse);
};

const setupCreditsNock = () => {
  const movieList = swapObjectProps(Movies);
  const moviesIds = Object.keys(movieList);
  moviesIds.map(movieCreditsNock);
};

module.exports = {
  setupCreditsNock,
};
