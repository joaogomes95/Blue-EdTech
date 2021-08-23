//Este const funciona com o import que usei no python

const express = require('express');
const app = express();

const port = 3003;

app.use(express.json());


const games = [
    'Valorant',
    'League of Legends',
    'GTA 5',
    'Ragnarok',
    'The Sims'
];

// Padrão para setar o endpoint da aplicação  / Home
app.get('/',(req, res) => {
    res.send("Bem vindo ao site Lista de Games");
});

games.forEach(function(item, indice) {
    console.log
})

//Gerando game aleatório
//------------------------------------------------------
function randomgame(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function jogo(num){
    return games[num];
}


app.get('/gamesa',(req, res) => {
    res.send(`<h1>${jogo(randomgame(0,games.length))}</h1>`);
});



//------------------------------------------------------------------
app.get('/games',(req, res) => {
    res.send(games);
});


app.get('/games/:id',(req, res) => {
    const id = req.params.id -1;
    const game = games[id];

    if(!game){
        res.send('Game não encontrado');
    }

    res.send(game);
});
//-----------------------------------------------------------------------------------------
//Inicio do CRUD
//Post
app.post('/games', (req, res)=>{
    const game = req.body.game;
    const id = games.length +1;

    games.push(game);

    res.send(`Jogo adicionado com sucesso: ${game} e seu id é ${id}.`);
});

// Atualização / put

// app.put('/games/:id',(req, res)=>{
//     const id = req.params.id -1;
//     const game = req.body.game;
//     const gameAntigo = games[id];
//     games[id] = game;

//     res.send(`O jogo ${gameAntigo} foi atualizado para ${game}.`);
// });

app.put('/games/:id',(req, res)=>{
    const id = req.params.id-1;
    const game = req.body.game;

    if (!games[id]){
        res.send("Jogo não encontrato.");
    }
    
    else{
        const nomeAnterior = games[id];
        games[id] = game;
        res.send(`Jogo ${nomeAnterior} atualizado com sucesso: ${game}.`);
    }
});


//Delete ---------------------------------------------
app.delete ('/games/:id', (req, res)=>{
    const id = req.params.id -1;
    const game = games[id];
    
    if(!game){
        res.send('O jogo não foi encontrado');
    }

    delete games[id];
    //O res.send funciona igual ao return mandando uma resposta ao usuário final.
    res.send("O jogo foi deletado")
});

//--------------------------------------------------
app.listen(port, (req, res) => {
    console.info(`App está rodando na porta http://localhost/${port}/`)
});