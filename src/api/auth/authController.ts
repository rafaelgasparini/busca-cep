import { Response, Request } from 'express';
import autenticacaoUseCase from './authUseCase'

export default {
    auth: async (req: Request, res: Response) => {
        try {
            const result = await autenticacaoUseCase.auth(req.body);

            return res.status(result.status).json(result.message)
        } catch (e) {

        }
    }
}