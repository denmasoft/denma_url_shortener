const request = require('supertest');
const chai = require('chai');

const { expect } = chai;
const app = require('../../app');

const apiEndpoint = '/api/v1/repos/stability';

describe('POST - Check github dependency stability', () => {
  it('it should return github repo rating', (done) => {
    const GithubRepo = {
      owner: 'exceljs',
      repo: 'exceljs',
    };

    request(app)
      .post(apiEndpoint)
      .send(GithubRepo)
      .end((err, res) => {
        expect(res.body.status).to.be.an('number').eql(200);
        expect(res.body).to.have.property('response');
        expect(res.body.response).to.have.property('owner');
        expect(res.body.response).to.have.property('name');
        expect(res.body.response).to.have.property('rating');
        done();
      });
  });
});
