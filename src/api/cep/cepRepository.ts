import axios from 'axios';

export default {
  find: async (cep: string) => await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.data).catch(((err) => ('Erro ao buscar cep'))),
};
