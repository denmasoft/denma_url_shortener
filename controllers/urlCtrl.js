
const shortenUrl = require('../use_cases/url/shortenUrl');
const showUrl = require('../use_cases/url/showUrl');

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
  async showUrl(data) {
    const { shortUrl } = data;
    let response;
    try {
      response = await showUrl(shortUrl, { urlRepository });
      return response;
    } catch (e) {
      throw e;
    }
  },
};
