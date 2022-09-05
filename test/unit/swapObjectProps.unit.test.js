const swapObjectProps = require('../../src/utils/swapObjectProps');
const { Movies } = require('../../src/data');

describe('swapObjectProps', () => {
  it('Should swap object keys with values', () => {
    const movieList = swapObjectProps(Movies);

    const expectedMovieList = {
      1724: 'The Incredible Hulk',
      1726: 'Iron Man',
      1771: 'Captain America: The First Avenger',
      1979: 'Fantastic Four: Rise of the Silver Surfer',
      9738: 'Fantastic Four (2005)',
      10138: 'Iron Man 2',
      10195: 'Thor',
      24428: 'The Avengers',
      68721: 'Iron Man 3',
      76338: 'Thor: The Dark World',
      99861: 'Avengers: Age of Ultron',
      100402: 'Captain America: The Winter Soldier',
      102899: 'Ant-Man',
      118340: 'Guardians of the Galaxy',
      166424: 'Fantastic Four (2015)',
      271110: 'Captain America: Civil War',
      283995: 'Guardians of the Galaxy Vol. 2',
      284052: 'Doctor Strange',
      284053: 'Thor: Ragnarok',
      284054: 'Black Panther',
      299534: 'Avengers: Endgame',
      299536: 'Avengers: Infinity War',
      299537: 'Captain Marvel',
      315635: 'Spider-Man: Homecoming',
      363088: 'Ant-Man and the Wasp',
      429617: 'Spider-Man: Far From Home',
    };
    expect(movieList).toEqual(expectedMovieList);
  });
});
