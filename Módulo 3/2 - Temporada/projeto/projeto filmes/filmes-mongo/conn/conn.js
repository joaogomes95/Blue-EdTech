const mongoose = require('mongoose');

const Conn = () => {
    mongoose.connect('mongodb://localhost:27017/filmes', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{
        console.log('Conectou demonho')
    }).catch((err) => cosole.error(err));
}


module.exports = Conn;