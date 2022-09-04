const errorHandler = (error) => {
  const { request, response } = error;

  if (response) {
    const { status_message: message } = response.data;
    const { status } = response;

    return {
      message,
      status,
    };
  }

  if (request) {
    return {
      message: 'server time out',
      status: 503,
    };
  }

  return {
    message: 'Something went wrong while setting up request',
    status: 500,
  };
};

module.exports = errorHandler;
