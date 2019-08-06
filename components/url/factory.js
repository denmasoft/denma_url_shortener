const urlCtrl = require('../../controllers/urlCtrl');

const factory = {
  async shortenUrl(data) {
    try {
      const repo = await urlCtrl.shortenUrl(data);
      return repo;
    } catch (e) {
      throw e;
    }
  },
};
module.exports = factory;
