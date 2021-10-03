const urlApi = 'http://localhost:3000/filmes';
let lista = document.getElementById('lista');
let edicao = false;
let idEdicao = 0;


// Get para ver todas a vagas cadastradas.
const getFilmes = async () => {
  const response = await fetch(urlApi); // requisição (GET) para API

  const data = await response.json();
  console.log(data);


// Listando o Array
  data.map((filme) => {
    lista.insertAdjacentHTML('beforeend', `
      <div class="card" style="width: 18rem;">
        <img src="${filme.imagem}" class="card-img-top" alt="...">
          <div class="card-body">
          <h5 class="card-title">${filme.nome}</h5>          
          </div>
        <ul class="list-group list-group-flush">
            <label>Gênero:</label>
            <li class="list-group-item">${filme.genero}</li>
            <label>Nota:</label> 
            <li class="list-group-item">${filme.nota}</li>           
        </ul>
        <div class="card-body">
          <button type="button " class="btn btn-primary" onclick="putFilme(${filme.id})">Editar</button>
          <button type="button" class="btn btn-danger" onclick="deleteFilme(${filme.id})">Deletar</button>
        </div>           
    `)
  })
}
getFilmes();

const submitForm = async (evento) => {

  evento.preventDefault();

  let nome = document.getElementById('nome');
  let genero = document.getElementById('genero');
  let imagem = document.getElementById('imagem');
  let nota = document.getElementById('nota');


  const filme = {
    nome: nome.value,
    genero: genero.value,
    imagem: imagem.value,
    nota: nota.value
  }


  if (!edicao) {
    const request = new Request(`${urlApi}/add`,{
      method: 'POST',
      body: JSON.stringify(filme),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })


    const response = await fetch(request);
    
    const result = await response.json();
  
    if(result) {
      getFilmes();
    }

  } else {
    const request = new Request (`${urlApi}/${idEdicao}`, {
      method: 'PUT',
      body: JSON.stringify(filme),
      headers: new headers({
        'Content-Type': 'application/json'
      })
    })

    const response = await fetch(request);

    const result = await response.json();

    if(result) {
      getFilmes();
    }
  }

  nome.value = '';
  genero.value = '';
  imagem.value = '';
  nota.value = '';

  lista.innerHTML = '';

}


// Get by ID
const getFilmeById = async (id) => {
  const response = await fetch(`${urlApi}/${id}`);
  return filme = response.json();
}


// Configurando PUT ao clicar no botão editar,
const putFilme = async (id) => {
  edicao = true;
  idEdicao = id;

  // Recendo objeto da vaga a partir do ID:
  const filme = await getFilmeById(id);

  //Salvando os elementos do html para fazer a manipução do dados(Edição).
  let nomeEl = document.getElementById('nome');
  let generoEl = document.getElementById('genero');
  let imagemEl = document.getElementById('imagem');
  let notaEl = document.getElementById('nota');

  // Prenchendo os campos do HTML com as informações que estavam no objeto.

  nomeEl.value = filme.nome;
  generoEl.value = filme.genero;
  imagemEl.value = filme.imagem;
  notaEl.value = filme.nota; 
}


// Deletes 
const deleteFilme = async (id) => {
  const request = new Request (`${urlApi}/${id}`,{
    method: 'DELETE',   
  })

  const response = await fetch(request);
  const data = await response.json();
  console.log(data.message);

  lista.innerHTML = '';
  getFilmes();

}















