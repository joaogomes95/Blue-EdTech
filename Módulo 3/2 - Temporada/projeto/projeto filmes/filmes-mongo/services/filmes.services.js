const Filme = require('../models/filme');

class FilmeService {

    findAll = async () => await Filme.find();
    
    findByID = async (id) => {
        return await Filme.findById(id);
    }

    createFilme = async (filme) => {
        return await Filme.create(filme);
    }

    putFilme = async (id, filme) => {
        return await Filme.updateOne({ _id: id}, filme);
    }

    deleteFilme = async (id) => {
        return await Filme.deleteOne({ _id: id});
    }

}



module.exports = FilmeService;