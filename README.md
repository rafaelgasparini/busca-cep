# BUSCA-CEP
## Desafio Luizalabs ##

API para realização de consultas de CEPs utilizando a API do VIACEP.
Se o CEP digitado não for encontrado, é alterado os valores finais para '0' até encontrar o endereço, caso não encontre o endereço mesmo assim é retornado uma menssagem de API inválida.
Ao digitar o CEP é validado removendo letras e caracteres especiais.

## Tecnologia Escolhida ##
Para o desenvolvimento desse projeto foi escolhido a linguagem `NODE JS` 
por ser uma linguagem leve de alta capacidade de escala e boa flexibilidade mantendo o custo baixo sem perder a performance.

### Requisitos: ###
`Node.Js` link para download: https://nodejs.org/en/
`NPM`
`Express`
`Typescript`

### Instalação: ###
Após clonar o repositorio, digite `npm install` na raiz do projeto para realizar a instalação dos pacotes de dependência..

## Execução  da API

### Iniciando Aplicação: ###
No terminal execute o comando 
```
npm run dev
```
assim iniciará a aplicação.
A aplicação estará disponível no endereço: `http://localhost:4020/`

**ATENÇÃO:** Esse endereço é valido caso as variáveis dentro do arquivo .env na raiz do projeto ` process.env.HOST` e ` process.env.POST` não estejam
configuradas com outro valor

### Testes: ###
```
npm run test
```

### Log: ###
Na raiz do projeto tem dois arquivos com nome de `error.log` e `info.log` são arquivos para armazenar logs da aplicação

### Rotas: ###
- Verificação da aplicação: <br>
[GET]  http://localhost:4020/api/ping <br><br>
- Solicitação do token: <br>
[POST] http://localhost:4020/api/auth <br><br>
Obs: Usar esse payload.
{
	"usuario":"admin",
	"senha":"admin"
}
- Busca por CEP: <br>
[GET]  http://localhost:4020/api/cep/{cep} <br><br>


- #### Documentação.
Para documentação da API foi utilizado o swagger
- Documentação Swagger: <br>
[GET] http://localhost:4020/api/cep/doc <br><br>


- ### Oque ocorre nesse processo do protocolo HTTP entre o Client e o Server
É disparado uma requisição HTTP com base no endereço de domínio especificada para o servidor responsável fazer a resolução do DNS, a partir dai conseguir fechar um 'HANDSHAKE' para o servidor de destino onde está a aplicação.
Após esse direcionamento feito pela resolução de DNS será redirecionado para o serviço de hospedagem, onde ele pode estar configurado para um cache ou não, se existir o cache é retornado a pagina solicitada, caso contrario ele é enviado para o servidor responsável pelo sistema.
O servidor recebe a requisição verifica e encaminha para a porta da aplicação correta, que no caso pode ser uma aplicação front-end retornando a pagina do site.






