const errorHandler = require('../../src/utils/errorHandler');

describe('errorHandler', () => {
  it('Should format error data when it has a response', () => {
    const errorMock = {
      response: {
        status: 400,
        data: {
          status_message: 'Bad request',
        },
      },
    };

    const error = errorHandler(errorMock);

    const expectedError = {
      message: 'Bad request',
      status: 400,
    };
    expect(error).toEqual(expectedError);
  });

  it('Should format error data when there is no response', () => {
    const errorMock = {
      request: {
        status: 503,
      },
    };

    const error = errorHandler(errorMock);

    const expectedError = {
      message: 'server time out',
      status: 503,
    };
    expect(error).toEqual(expectedError);
  });

  it('Should format error data when there is no request/response', () => {
    const error = errorHandler('Unknown error');

    const expectedError = {
      message: 'Something went wrong while setting up request',
      status: 500,
    };
    expect(error).toEqual(expectedError);
  });
});
