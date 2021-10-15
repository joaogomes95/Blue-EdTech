const mongoose = require('mongoose');

const todoModel = new mongoose.Schema({
    nome: { type: String, required: true },
    descrição: { type: String, required: true },
    prioridade: { type: String, default:"Low",required:true},
    status: {type:String,required:true},        
    prazo: { type: Date, default: Date.now() },
    dataCriacao: { type:Date, default:Date.now}
})

const Todo = mongoose.model("Todos",todoModel);

module.exports = Todo;