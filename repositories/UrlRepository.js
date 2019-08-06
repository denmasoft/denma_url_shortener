const MongoDbUrlRepository = require('../repositories_interfaces/mongodb/MongoDbUrlRepository');

class UrlRepository extends MongoDbUrlRepository {
  findShortUrl(shortUrl) {
    return this.find({ shortUrl });
  }
}
module.exports = UrlRepository;
