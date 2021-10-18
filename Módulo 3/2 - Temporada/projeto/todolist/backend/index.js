const express = require('express');
const cors = require('cors');

// Importando o model

const TodoRoutes = require('./routes/todo.routes')

//Inicializando expressions

const app = express();

app.use(express.json());
app.use(cors());

// Importa conexão com o banco
const Conn = require('./conn/conn');
Conn();

app.use('/todo', TodoRoutes);

const port = 3002;
app.listen(port, () => {
    console.log(`App rodando (htttp://localhost:${port})`)
});