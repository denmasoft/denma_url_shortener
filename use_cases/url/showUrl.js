
const moment = require('moment');
const UrlModel = require('@models/Url');
const { domainUrl } = require('@config');

module.exports = async (url, { urlRepository }) => {
  try {
    const urlFound = await urlRepository.findShortUrl(`${domainUrl}/${url}`);
    const urlModel = new UrlModel(urlFound.longUrl, urlFound.shortUrl, moment(urlFound.date).format('YYYY-MM-DD'));
    return urlModel;
  } catch (error) {
    throw error;
  }
};
