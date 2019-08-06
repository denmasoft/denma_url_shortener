
const moment = require('moment');
const UrlModel = require('../../models/Url');

module.exports = async (url, { urlRepository, urlService }) => {
  try {
    const urlModel = new UrlModel(url, '', moment().format('YYYY-MM-DD'));
    const urlFound = await urlRepository.find({ longUrl: url });
    if (urlFound) {
      urlModel.shortUrl = urlFound.shortUrl;
      urlModel.date = moment(urlFound.date).format('YYYY-MM-DD');
    } else {
      const shortUrl = await urlService.shortenUrl();
      urlModel.shortUrl = shortUrl;
      await urlRepository.persist(urlModel);
    }
    return urlModel;
  } catch (error) {
    throw error;
  }
};
