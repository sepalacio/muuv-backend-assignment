const request = require('supertest');
const nock = require('nock');
const { setupCreditsNock } = require('./fixtures/theMovieDatabaseApi');

const app = require('../../src/app');

describe('GET /actors', () => {
  it('GET /actorsWithMultipleCharacters => actors with multiple Marvel characters', async () => {
    setupCreditsNock();

    await request(app)
      .get('/actorsWithMultipleCharacters')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          'Chris Evans': [
            {
              movieName: 'Captain America: The First Avenger',
              characterName: 'Steve Rogers / Captain America',
            },
            {
              movieName: 'Fantastic Four (2005)',
              characterName: 'Johnny Storm / Human Torch',
            },
          ],
          'Michael B. Jordan': [
            {
              movieName: 'Fantastic Four (2015)',
              characterName: 'Johnny Storm / The Human Torch',
            },
            {
              movieName: 'Black Panther',
              characterName: "N'Jadaka / Erik 'Killmonger' Stevens",
            },
          ],
        });
      });

    nock.restore();
  });
});
