//   Desafio 1: Precisamos de uma lista somente com os nomes dos 
//   diretores de cada filme representado na nossa lista de filmes acima. 
//   Crie uma função de nome "getAllDirectorsNames" que receberá um array de filmes como 
//   ARGUMENTO, para então retornar esta lista de nomes. 
//   Caso o array esteja vazio, a função deverá retornar null.

const movies = [
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      director: 'Frank Darabont',
      duration: '2h 22min',
      genre: ['Crime', 'Drama'],
      score: 9.3
    },
    {
      title: 'The Godfather',
      year: 1972,
      director: 'Francis Ford Coppola',
      duration: '2h 55min',
      genre: ['Crime', 'Drama'],
      score: 9.2
    },
    {
      title: 'The Godfather: Part II',
      year: 1974,
      director: 'Francis Ford Coppola',
      duration: '3h 22min',
      genre: ['Crime', 'Drama'],
      score: 9
    },
    {
      title: 'The Dark Knight',
      year: 2008,
      director: 'Christopher Nolan',
      duration: '2h 32min',
      genre: ['Action', 'Crime', 'Drama', 'Thriller'],
      score: 9
    },
    {
      title: '12 Angry Men',
      year: 1957,
      director: 'Sidney Lumet',
      duration: '1h 36min',
      genre: ['Crime', 'Drama'],
      score: 8.9
    },
  ];

function getAllDirectorsNames(moviesList){

    if (moviesList.length === 0){ 
        return null;
    }

    const listaDeNomes = moviesList.map((cadaFilme)=>{        
        return cadaFilme.director;
    })

    return listaDeNomes;
}


console.log(getAllDirectorsNames(movies));
console.log(getAllDirectorsNames([]));

// Desafio 2: Crie uma função "findMoviesByDirector" que receberá como argumento uma String com o nome de um Diretor, 
//e ela deverá retornar uma lista FILTRADA (olha a dica ;-D) contendo somente o NOME dos filmes que foram dirigidos por este diretor.
// Caso Não seja encontrado nenhum filme com o nome do diretor informado, 
//devemos retornar a seguinte String: "Nenhum filme encontrado para o diretor <NOME_DO_DIRETOR>"
// Ex: findMoviesByDirector('Henrique Mendes') ---> 'Nenhum filme encontrado para o diretor Henrique Mendes'

//https://github.com/henriquegmendes