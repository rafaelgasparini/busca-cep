import jwt from 'jsonwebtoken';
require('dotenv/config');

export default async (params: string) => {
    const key: string = process.env.JWT_KEY || ''

    return await jwt.sign(params, key)

};
