
module.exports = class {
  constructor(repository) {
    this.repository = repository;
  }
  persist(UrlModel) {
    return this.repository.persist(UrlModel);
  }

  update(UrlModel) {
      return this.repository.update(UrlModel);
  }

  remove(uid) {
      return this.repository.remove(uid);
  }

  find(longUrl) {
      return this.repository.find(longUrl);
  }

  findAll() {
      return this.repository.findAll();
  }
};
