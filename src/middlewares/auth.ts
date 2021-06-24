import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export default (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    const JWT = process.env.JWT_KEY || ''

    if (!authHeader)
        return res.status(400).send({error: "Token não encontrado."});

    jwt.verify(authHeader, JWT, (err) => {
        if (err)
            return res.status(400).send({error: "Token inválido"});

        return next();
    });
};