import { Request, Response } from 'express';
import cepUseCase from './cepUseCase';
import logger from '../../utils/logger';

export default {
  searchCep: async (req: Request, res: Response) => {
    try{
      const { cep } = req.params;
      const result = await cepUseCase.searchCep({ cep });

      logger.info(`${new Date()} - status: ${JSON.stringify(result.message)}`);
      return res.status(result.status).json(result.message);
    }catch(e){
      logger.error(`Error:${new Date()} - ${e}`);
      return res.status(500).json({erro: e});
    }
  },
};
