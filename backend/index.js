const express = require('express');
const bodyParser = require('body-parser');
// protocolo de comunicação entre APIs e outros serviços
const cors = require('cors'); // CORS: autoriza para qualquer tipo de serviço (front-end, outras APIs, etc)

const app = express();
const port = 8081;

// importações
const proprietario = require('./controllers/ProprietarioControlls.js');
const veiculo = require('./controllers/VeiculoControlls.js');

// Rotas
app.use(bodyParser.json());

// Função CORS para a autorização do uso da API
app.use(cors());

app.get('/', (req, res) => res.send('Estou aqui'));
app.use('/Proprietario', proprietario);
app.use('/Veiculo', veiculo);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}!`));