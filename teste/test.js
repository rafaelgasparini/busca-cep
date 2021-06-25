const supertest = require('supertest');
require('dotenv/config');
const app = require('../app')

describe('Test API Search CEP', () => { 
  
    it('[1.0] Get - Testando funcionamento da API', async () => {
        const res = await supertest(app).get('/api/ping')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('message')
    });

    it('[1.1] Get - CEP request', async () => {
        const res = await supertest(app).get('/api/cep/14401224')
            .set('Authorization', "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.L3zqZePp1urbCK5yiapsxgV3AE66c_V5Ub4N4LVjQvs")
            expect(res.status).toBe(200);
    });

    it('[1.2] Get - CEP resquest with change of last number', async () => {
        const res = await supertest(app).get('/api/cep/14401200')
            .set('Authorization', "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.L3zqZePp1urbCK5yiapsxgV3AE66c_V5Ub4N4LVjQvs")
            expect(res.status).toBe(200);
    });

    it('[1.3] Get - CEP request invalid', async () => {
        const res = await supertest(app).get('/api/cep/090909A')
        .set('Authorization', "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.L3zqZePp1urbCK5yiapsxgV3AE66c_V5Ub4N4LVjQvs")
            expect(res.status).toBe(400);        
    });

    it('[1.4] POST - Authentication', async () => {
        const res = await supertest(app).post('/api/auth')
            .send({ usuario: 'admin', senha: 'admin' })
            .set('Accept', 'application/json')
            expect(res.status).toBe(200); 

    });

    it('[1.5] POST - Not Authentication', async () => {
        const res = await supertest(app).post('/api/auth')
        .send({usuario: 'admin1',senha: 'admin'})
        .set('Accept', 'application/json')
        expect(res.status).toBe(401); 
    });

});
