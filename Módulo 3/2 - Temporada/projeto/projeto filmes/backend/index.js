// Primeiros comandos para iniciar as rotas.

//Importando express
const express = require('express');

//importando cors

const cors = require('cors');

//Inicializando o express

const app = express();

//--------------------------------------------------------------------------------------------------------


//Express trabalhando com json

app.use(express.json());

//Inicializando as configurações do cors

app.use(cors());

// Importando as rotas dos filmes

const FilmesRouter = require('./routers/filmes.routes');

// Inicializando a rota /filmes de acordo com as configurações do arquivo Filmes Router.

app.use('/filmes', FilmesRouter);

app.get('/', (req, res) => {
    res.send('Bem vindo!')
});

const port = 3000;

app.listen(port,(req, res)=>{
    console.log(`Servidor rodando na porta http://localhost:3000/`)
});