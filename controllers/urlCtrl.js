
const shortenUrl = require('../use_cases/url/shortenUrl');

const { urlRepository } = require('../repositories');
const { urlService } = require('../services');

module.exports = {
  async shortenUrl(data) {
    const { url } = data;
    let response;
    try {
      response = await shortenUrl(url, { urlRepository, urlService });
      return response;
    } catch (e) {
      throw e;
    }
  },
};
