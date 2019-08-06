const factory = require('./factory');
const Response = require('../../Response');

const middleware = {
  async shortenUrl(req, res) {
    try {
      const data = await factory.shortenUrl(req.body);
      res.status(200).json(new Response(200, 200, data, 'successfull'));
    } catch (error) {
      res.status(error.status).json(new Response(error.status, error.status,
        {}, 'failed'));
    }
  },
  async showUrl(req, res) {
    try {
      const data = await factory.showUrl(req.params);
      res.status(301).redirect(data.longUrl);
    } catch (error) {
      console.log(error);
      res.status(error.status).json(new Response(error.status, error.status,
        {}, 'failed'));
    }
  },
};

module.exports = middleware;
