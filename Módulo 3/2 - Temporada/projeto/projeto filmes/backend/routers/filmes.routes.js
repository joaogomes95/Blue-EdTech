const express = require('express');
const router = express.Router();


// Array que contém as informações do filme
const filmes = [
    {
        id: Date.now(),
        nome: "Pantera Negra",
        genero: "Ação",
        nota: 9,
        imagem: "https://www.comboinfinito.com.br/principal/wp-content/uploads/2019/08/pantera-negra.jpg"
    },         
]


// GET retornar a lista de filmes
router.get('/',(req, res) =>{
    //responde o array dos filmes para API
    res.send(filmes);
});

// GET by ID (Trazendo as informações por ID)
router.get('/:id', (req, res) =>{
    const idParms = req.params.id;
    const index = filmes.findIndex(filme => filme.id == idParms);
    const filme = filmes[index];
    res.send(filme);
})

//PUT = Atualização dos dados cadastrados para o filme a partir do ID.
router.put('/:id', (req, res) => {
    const filmeEdit = req.body;
    const id = req.params.id;
    let filmePreCadastrado = filmes.find((filme) => filme.id == id);

    // filmePreCadastrado = {
    //     ...filmePreCadastrado,
    //     ...filmeEdit
    // }
    
    filmePreCadastrado.nome = filmeEdit.nome;
    filmePreCadastrado.genero = filmeEdit.genero;
    filmePreCadastrado.nota = filmeEdit.nota;
    filmePreCadastrado.imagem = filmeEdit.imagem;

    res.send({
        message: `filme ${filmePreCadastrado.id} foi atualizado`,
        data: filmePreCadastrado
    })
})


//------------------------------------------------------------------
//POST - Criando novo item na lista.
router.post('/add', (req, res) => {
    const filme = req.body;
    filme.id = Date.now();
    filmes.push(filme);
    res.status(201).send({
      message: 'cadastrado com sucesso',
      data: filme
    });
  })

//--------------------------------------------------------------------------------------------------------------------
//DELETE = Deletando um item da lista pelo id.
router.delete('/:id',(req, res)=>{
    const id = req.params.id;
    const index = filmes.findIndex((filme)=> filme.id == id);
    filmes.splice(index, 1);

    res.send({
        message: `O filme selecionado foi excluído!`,
    })
});




module.exports = router;