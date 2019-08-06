
module.exports = class {
  constructor(status, responseCode, response, message) {
    this.status = status;
    this.response = response;
    this.response_code = responseCode;
    this.message = message;
  }
};
