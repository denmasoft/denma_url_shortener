const shortid = require('shortid');
const { domainUrl } = require('@config');
class UrlService {
  constructor() {}

  async shortenUrl() {
    try {
      const urlCode = shortid.generate();
      const shortUrl = domainUrl + '/' + urlCode;
      return shortUrl;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = UrlService;
