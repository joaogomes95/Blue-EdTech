const mongoose = require('mongoose');

const Conn = () => {
    mongoose.connect('mongodb://localhost:27017/todolist',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('Mongoose connect')
    }).catch(err => console.error(err));
}

module.exports = Conn;