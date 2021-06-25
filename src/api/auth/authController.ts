import { Response, Request } from 'express';
import autenticacaoUseCase from './authUseCase'
import logger from '../../utils/logger';

export default {
    auth: async (req: Request, res: Response) => {
        try {
            const result = await autenticacaoUseCase.auth(req.body);
            logger.info(`${new Date()} - status: ${JSON.stringify(result.message)}`);
            return res.status(result.status).json(result.message)
        } catch (e) {
            logger.error(`Error:${new Date()} - ${e}`);
            return res.status(500).json({erro: e});
        }
    }
}