// a tarefa ela precisa ter 3 campos
// texto da tarefa, checked: true ou false, 'id'
// Modelo de dados da tarefa
// let array = [{
//   text: 'tarefa',
//   checked: false,
//   id: 1234512315123
// }]
const todoItems = [];

// Funcao que adiciona uma tarefa individual dentro do array das tarefas
const addTodo = (text) => {
  // objeto da tarefa
  const todo = {
    text: text,
    checked: false,
    id: Date.now()
  }
  todoItems.push(todo);
  renderTodo(todo);
  console.log(todoItems);
}


// parte responsavel mapeamento do formulario do html
const form = document.querySelector('.js-form');
console.log(form);

// escutar o evento de submit do formulario
form.addEventListener('submit', (evento) => {
  evento.preventDefault();
  console.log(evento);

  // selecionar o element input
  const input = document.querySelector('.js-todo-input');

  // seleciona o value/texto do elemento input
  const text = input.value;
  console.log(text);

  if (text !== '') {
    // envia o texto digitado para a funcao addTodo que espera um texto para adicionar na lista
    addTodo(text);
    // limpa o input
    input.value = '';
    // da o foco no input
    input.focus();
  }
})



// Funcao que renderiza os Todos na tela
const renderTodo = (todo) => {

  // mapear a lista de onde deve ser incluida a tarefa
  const list = document.querySelector('.js-todo-list');
  console.log(list);

  //verficando se o todo existe
  const todoExist = document.querySelector(`[data-key='${todo.id}']`);

  if(todo.deleted){
    todoExist.remove();
  }

  // criando um li no DOM 
  const listItem = document.createElement("li");

  //verifica se a tarefa esta concluida 
  // If ternario funciona como o de baixo.
  const isCheck = todo.checked ? 'done' : '';
  // if da forma antiga
  // if(todo.checked) {
  //   ischeck = 'done'
  // }

  // adiciona a classe todo-item ao elemento li recem criado
  listItem.setAttribute('class', `todo-item ${isCheck}`);

  // adiciona o atributo customizado 'key' no li recem criado
  listItem.setAttribute('data-key', todo.id);
  // adicionar a li criada dentro da ul list
  listItem.innerHTML = `
    <input id=${todo.id} type="checkbox"/>
    <label for=${todo.id} class="tick js-tick" onClick="toogleDone(${todo.id})"></label>
    <span>${todo.text}</span>
    <button class="delete-todo js-delete-todo" onClick="deleteTodo(${todo.id})">
      <svg>
        <use href="#delete-icon"></use>
      </svg>
    </button>
  `;
  if(todoExist) {    
    list.replaceChild(listItem, todoExist);

  }else{
    list.append(listItem);
  }  

}

const toogleDone = (id) => {
  //function para encontrar o item da minha lista 
  const index = todoItems.findIndex(todo => todo.id === id);
  todoItems[index].checked = !todoItems[index].checked;
  console.log(todoItems[index]);

  renderTodo(todoItems[index]);  
}

const deleteTodo = (id) => {

  const index = todoItems.findIndex(todo => todo.id === id);

  const todoForDelete = {
    deleted: true,
    ...todoItems[index]
  }

  todoItems.splice(index, 1);
  renderTodo(todoForDelete); 
}