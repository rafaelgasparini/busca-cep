import { Router } from 'express';

import cepController from '../api/cep/cepController';
import pingController from '../api/ping/pingController';
import autenticacaoController from '../api/auth/authController';

import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerConfig from '../utils/swagger';

import authentication from '../middlewares/auth'

const routes = Router();

// Documentação Swaggwer
const swaggerDocs = swaggerJsDoc(swaggerConfig);
routes.use('/api/cep/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// Autenticação
routes.post('/api/auth', autenticacaoController.auth);

// Rotas para verificar API
routes.get('/api/ping', pingController.ping);

routes.use(authentication)
// Rotas para consulta de CEP
routes.get('/api/cep/:cep', cepController.searchCep);

export default routes;
