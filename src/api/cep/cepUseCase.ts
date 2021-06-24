import cepRepository from './cepRepository';

interface Cep {
    cep: string
}

export default {
    searchCep: async ({ cep }: Cep): Promise<any> => {
        let validacep = /^[0-9]{8}$/;
        cep = cep.replace(/\D/g, '')

        if (!validacep.test(cep)) return { status: 400, message: 'CEP inválido' }

        let returnCep = await cepRepository.find(cep);

        if (returnCep.erro) {
            let newCep = cep
            for (let i = cep.length - 1; i >= 0; i--) {
                let cep = await implement(newCep, i)
                newCep = cep
                returnCep = await cepRepository.find(newCep);
                if (!returnCep.erro) {
                    break;
                }
            }
        }

        if (returnCep.erro) return { status: 400, message: 'CEP inválido' }

        let endereco = {
            cep: returnCep.cep,
            rua: returnCep.logradouro,
            bairro: returnCep.bairro,
            cidade: returnCep.localidade,
            uf: returnCep.uf
        }

        return { status: 200, message: endereco };
    },
};

const implement = async (cep: string, i: number) => {
    return cep.substr(0, i) + 0 + cep.substr(i + 1)
};
