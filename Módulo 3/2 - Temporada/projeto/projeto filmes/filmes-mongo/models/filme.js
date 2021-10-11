//Schemas => É a estrutura de dados do documento(Tabela). É aplicado por meio da camada de aplicativos
//Documents => São as linhas do documento(As linhas tabelas)

const mongoose = require('mongoose');

const filmeModel = new mongoose.Schema({
    nome: { type: String, require: true },
    genero: { type: String, require: true },
    nota: { type: Number, require: true },
    imagem: { type: String, require: true },
    dataCriacao: { type:Date, default:Date.now}
})


const Filme = mongoose.model("filmes", filmeModel);



module.exports = Filme;