const urlCtrl = require('../../controllers/urlCtrl');

const factory = {
  async shortenUrl(data) {
    try {
      const urlData = await urlCtrl.shortenUrl(data);
      return urlData;
    } catch (e) {
      throw e;
    }
  },
  async showUrl(data) {
    try {
      const urlData = await urlCtrl.showUrl(data);
      return urlData;
    } catch (e) {
      throw e;
    }
  },
};
module.exports = factory;
