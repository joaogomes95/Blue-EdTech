// npm init -y
// npm i express
// npm i -D nodemon
// npm i cors
//npm install mongoose

//importando express
const express = require('express');
//Importando Cors
const cors = require('cors');

// // Importando a biblioteca do mongoose (DB)
// const mongoose = require('mongoose');

// Importando o model filmes

const FilmeRoutes = require('./routes/filmes.routes')

//inicializando o express
const app = express();

app.use(express.json());
app.use(cors());

// Importa conexão com o banco
const Conn = require('./conn/conn');
Conn();

app.use('/filmes', FilmeRoutes);


const port = 3000; 
app.listen(port, () => {
    console.log(`App está rodando (htttp://localhost:${port})`);
});


























// Criando estrutura inicial do filme
// const filmeAdd = new Filme({
//     nome: 'Capitã Marvel',
//     genero: 'Ação',
//     nota: 10,    
//     imagem: "https://upload.wikimedia.org/wikipedia/pt/5/59/Captain_Marvel_%282018%29.jpg"
// }) 

// filmeAdd.save()
// .then(()=> console.log('Filme cadastrado!'))
// .catch((err) => console(err));

// //get
// app.get('/filmes', (req,res)=> {
//     Filme.find({})
//     .then((filmes)=>{
//     console.log(filmes);
//     res.send(filmes)
//     });
// });


// //GET by id

// app.get('/filmes/:id', async (req,res)=> {
//     const filmeID = await Filme.findOne({ _id: req.params.id })
//     res.send(filmeID);
// });


// //DELETE 

// app.delete('/filmes/delete/:id', async (req, res)=>{
//     await Filme.deleteOne({ _id: req.params.id });
//     res.send(200).send({
//         message: 'Filme excluído com sucesso',
//     })
// })


// // Post

// app.post('/filmes/add', async (req, res) => {
//     await Filme.create(req.body)
//     .then(() => {
//         res.status(201).send({
//           message: 'Criado com sucesso'
//         })
//       })
//       .catch((err) => {
//         res.status(400).send({
//           error: 'Algo deu errado, tente novamente'
//         })
//         console.log(err);
//     })
// });


// //PUT 
// app.put('/filmes/:id', async (req, res)=>{
    
// })












// const port = 3000; 
// app.listen(port, () => {
//     console.log('App ta rodando!!!')
// });
