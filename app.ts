import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './src/routes';
import morgan from 'morgan';

require('dotenv/config');

const port = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.use(routes);

app.listen(port, () => {
    console.log(`Servidor Rodando:${port}`)
})

module.exports = app;