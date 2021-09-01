const express = require('express');
const router = express.Router();
const Musica = require('../models/musicas')

// CRUD functions

router.post('/add', (req, res) =>{
    res.send("rota / add");
});

router.get('/', (req, res) =>{
    res.send("Ta rodando");
});

router.put('/update', (req, res) =>{
    res.send("rota / update");
});

router.delete('/delete', (req, res) =>{
    res.send("rota / delete");
});

module.exports = router;