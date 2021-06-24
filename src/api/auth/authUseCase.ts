import bcrypt from 'bcryptjs';
require('dotenv/config');
import generateToken from '../../utils/auth'

interface Credentials {
    usuario: string
    senha: string
}

export default {
    auth: async (params: Credentials) => {
        const { usuario, senha } = params;
        let token: string;
        const pass: string = process.env.PASSWORD || ''
        const user: string = process.env.USER_JWT || ''

        if (usuario !== user || !await bcrypt.compare(senha, pass))
            return { status: 401, message: 'Usuário ou senha inválido' }

        token = await generateToken(usuario)

        console.log('aki', token)

        return ({status: 200, message: token})

    }
}