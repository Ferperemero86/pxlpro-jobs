module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: function (request, h) {
      return h.view('pages/index.njk', {
        message: 'Hello world',
      });
    },
    options: {
      description: 'Homepage',
    },
  },
  {
    method: 'GET',
    path: '/public/{param*}',
    handler: {
      directory: {
        path: '.',
        redirectToSlash: true,
        index: true,
      },
    },
    options: {
      description: 'Static assets',
    },
  },
];
