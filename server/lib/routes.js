module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: function (request, h) {
      return h.view('index', {
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
