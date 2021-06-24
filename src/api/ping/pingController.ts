import { Request, Response } from 'express';

export default {
  ping: async (req: Request, res: Response) => res.status(200).json({ message: 'Pong' }),
};
