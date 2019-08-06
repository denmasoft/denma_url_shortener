
const UrlModel = require('../../remote_models/mongodb/Url');
module.exports = class {
  constructor() {}
  async persist(urlModel) {
    const {longUrl, shortUrl, dateCreated } = urlModel;
    const url = new UrlModel({longUrl: longUrl,shortUrl: shortUrl, dateCreated: dateCreated});
    try {
        let urlEntity = await url.save();
        return urlEntity;
    }catch (e) {
        throw e;
    }
  }

  async update(urlModel) {
      try {
          let url = await UrlModel.findOneAndUpdate({uid: urlModel.uid}, urlModel, {new: true});
        return url;
      }catch (e) {
          throw e;
      }
  }

  async remove(uid) {
      try {
          return await UrlModel.findOneAndRemove({uid: uid});
      }catch (e) {
          throw e;
      }
  }

  async find(longUrl) {
      try {
          let url = await UrlModel.findOne({longUrl:longUrl});
          return url;
      }catch (e) {
          throw e;
      }
  }

  async findShortUrl(shortUrl) {
    try {
        let url = await UrlModel.findOne({shortUrl:shortUrl});
        return url;
    }catch (e) {
        throw e;
    }
  }

  async findAll() {
      try{
          let urls;
          deurlsvices = await UrlModel.find();
          return urls;
      } catch (e) {
          throw e;
      }
  }
};
