const superagent = require('superagent');
const should = require('should');
require('dotenv/config');


describe('Test API Search CEP', () => {
    it('[1.0] Get - Testando funcionamento da API', (done) => {
        superagent.get(`${process.env.HOST}:${process.env.PORT}/api/ping`)
            .end((err, res) => {
                res.status.should.equal(200);
                done();
            })
    });
    it('[1.1] Get - CEP request', (done) => {
        superagent.get(`${process.env.HOST}:${process.env.PORT}/api/cep/14401224`)
            .set('Authorization', "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.L3zqZePp1urbCK5yiapsxgV3AE66c_V5Ub4N4LVjQvs")
            .end((err, res) => {
                res.status.should.equal(200);
                done();               
            })
    });
    it('[1.2] Get - CEP resquest with change of last number', () => {
        superagent.get(`${process.env.HOST}:${process.env.PORT}/api/cep/14401200`)
            .set('Authorization', "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.L3zqZePp1urbCK5yiapsxgV3AE66c_V5Ub4N4LVjQvs")
            .end((err, res) => {
                res.status.should.equal(200);
            })
    });
    it('[1.3] Get - CEP request invalid', (done) => {
        superagent.get(`${process.env.HOST}:${process.env.PORT}/api/cep/090909A`)
            .end((err, res) => {
                res.status.should.equal(400);
                done();
            })
    });
    it('[1.4] POST - Authentication', (done) => {
        superagent.post(`${process.env.HOST}:${process.env.PORT}/api/auth`)
            .send({ usuario: 'admin', senha: 'admin' })
            .set('Accept', 'application/json')
            .end((err, res) => {
                res.status.should.equal(200);
                done();
            })
    });

    it('[1.5] GET - Not Authentication', (done) => {
        superagent.post(`${process.env.HOST}:${process.env.PORT}/api/auth`)
            .send({ usuario: 'admin1', senha: 'admin' })
            .set('Accept', 'application/json')
            .end((err, res) => {
                res.status.should.equal(401);
                done();
            })
    });

});
