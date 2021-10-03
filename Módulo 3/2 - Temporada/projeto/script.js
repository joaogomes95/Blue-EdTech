let form = document.querySelector('.form-js');
let filmes = [];
form.addEventListener('submit', (event) => {  
  event.preventDefault();
  console.log('clicou aqui!');
  const inputNome = document.querySelector('.js-nome').value;
  const inputGenero = document.querySelector('.js-genero').value;
  const inputImagem = document.querySelector('.js-imagem').value;
  const inputNota = document.querySelector('.js-nota').value;
  
  const filme = {
    nome: inputNome,
    genero: inputGenero,
    imagem: inputImagem,
    nota: inputNota,
  };
  filmes.push(filme);

  const lista = document.querySelector('.card-filme');
  lista.innerHTML = "";
  filmes.map((filme, index) => {
    lista.insertAdjacentHTML('beforeend', `
    <div class="card" style="width: 18rem;">
      <img src="${filme.imagem}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${filme.nome}</h5>          
    </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${filme.genero}</li>
        <li class="list-group-item">${filme.nota}</li>          
      </ul>        
    </div>
      
    `)
  })
})

