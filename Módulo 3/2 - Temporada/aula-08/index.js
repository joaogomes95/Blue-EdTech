// request = a requisição que vem do cliente
// response = resposta que servidor envia para o cliente

// importanto express
const express = require('express');

//inicializando express

const app = express();


// declarando porta 

const port = 3000;

const filmes = ['Vingadores', 'harry potter', 'O guarda Costas'];

//Método get

app.get('/', (req, res) => {
    res.send('Helo irmão')
})

//Get mostrando os itens

app.get('/filmes' ,(req, res)=>{
    res.send(filmes)
})

//get mostrando os itens por id
app.get('/filmes/:id',(req, res)=>{
    const id = req.params.id -1;
    const filme = filmes[id];

    res.send(filme)
})




app.listen(port, ()=>{
    console.log('O meu servidor está rodando!')
})