const mongoose = require('mongoose');

const FilmesService = require('../services/filmes.services');

const filmeService = new FilmesService();

class FilmesController {
    
    getFilmes = async (req, res) => {
        const filme = await filmeService.findAll();
        res.send(filme);
    }
    
    getFilmesById = async (req, res) => {
        const id = req.params.id;

        if(!mongoose.Types.ObjectId.isValid(id)) {
            res.status(403).send('ID not found');
            return
        }

        const filme = await filmeService.findByID(id);

        if(!filme) {
            res.status(404).send('Não localizado!');
            return
        }

        res.status(200).send(filme);
    }

    createFilme = async (req, res) => {
        const filme = req.body;
        const filmeSalvo = await filmeService.createFilme(filme);
        res.send({message:`filme ${filmeSalvo.nome} criado com sucesso!`});
    }

    deleteFilme = async (req, res) => {
        const id = req.params.id;       
        await filmeService.deleteFilme(id)
        res.send({message:`Deletado com sucesso!`});   
    
    }

    putFilme =  async (req, res) => {  
        const id = req.params.id; 
        const filme = req.body;      
        await filmeService.putFilme(id, filme) 
        res.send({message:`Atualizado com sucesso!`});  ;   
    
    };
    
}

module.exports = FilmesController;
