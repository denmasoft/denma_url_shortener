const middleware = require('./middleware');

module.exports = (router) => {
  router.post('/url/shorten', middleware.shortenUrl);
  router.get('/:shortUrl', middleware.showUrl);
};
