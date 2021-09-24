import React, { useState } from "react";
import ButtonBtn from './components/button/button';
import Title from './components/title/title';
// import Link from './components/link/link';
import SubTitle from "./components/subtitle/subtitle";
import Images from "./components/images/images";
import './App.css';


export default function App() {    
    const [filmes, setFilmes] = useState([
      {
        id: 1,
        nome: "Homem de Ferro 3",
        imagemUrl:
          "https://rollingstone.uol.com.br/media/_versions/legacy/2014/img-1024787-homem-de-ferro-3-robert-downey-jr_widelg.jpg",
        trailer:"https://www.youtube.com/watch?v=s7MHXDEdjS0&ab_channel=MarvelBrasil",
        },
      {
        id: 2,
        nome: "Vingadores, Guerra Infinita",
        imagemUrl:
          "https://play-lh.googleusercontent.com/RuJhT-qa1vnoFg3lfUZkOR3HQ4OZTjS3Mmz5khe_a-N2CTkb1xQO3tskgRGImB8HB4U",
        trailer:"https://www.youtube.com/watch?v=t_ULBP6V9bg&ab_channel=Ingresso.com",
      },
      {
        id: 3,
        nome: "Vingadores Ultimato",
        imagemUrl:
          "https://www.blogsoestado.com/marciohenrique/files/2019/09/VINGADORES-ULTIMATO-2019.jpg",
        trailer:"https://www.youtube.com/watch?v=g6ng8iy-l0U&ab_channel=Ingresso.com",
      },
      {
        id: 4,
        nome: "Homem de Ferro",
        imagemUrl:
          "https://images-na.ssl-images-amazon.com/images/I/81vTHovrz%2BL._AC_SY606_.jpg",
        trailer:"https://www.youtube.com/watch?v=8ugaeA-nMTc&ab_channel=MovieclipsClassicTrailers"
      },
      {
        id: 5,
        nome: "Homem de Ferro 2",
        imagemUrl:
          "https://media.fstatic.com/SFp4c8GT3GTGYok7_526qDSHTns=/290x478/smart/media/movies/covers/2018/09/66432b37ed80464274a58239b695007f95c79155.jpg",
        trailer:"https://www.youtube.com/watch?v=wKtcmiifycU&ab_channel=Movieclips",
      },
      {
        id: 6,
        nome: "Pantera Negra",
        imagemUrl:
          "https://lumiere-a.akamaihd.net/v1/images/unnamed_13_75a3ebb1.jpeg?region=0%2C0%2C356%2C512",
        trailer:"https://www.youtube.com/watch?v=KszSDnO3GGk&ab_channel=Ingresso.com"
      },
    ]);

    
    // const [nomeFilme, setNomeFilme] = useState("");
    // const [imagemUrlFilme, setImagemUrlFilme] = useState("");
    // const [trailerFilme, setTrailerFilme] = useState("");

    // const adicionaFilme = (e) => {
    //   e.preventDefault();
    //   console.log(nomeFilme);
    //   console.log(imagemUrlFilme);
    //   console.log(trailerFilme);
    // }

    return ( 
      <div className="container">          
        <Title titulo="Meus Filmes Favoritos"/>
        <ul>
          {filmes.map((f) => (
            <li key={f.id}>
              <SubTitle nome={f.nome}/>
              <Images images={f.imagemUrl} alt={f.nome} />              
              <ButtonBtn link={f.trailer}/>                                        
            </li>                
          ))}                
        </ul>        
        <br/>
      </div>
      
    );
}

// Futuro crud

 /* <h2>Cadastre um novo filme</h2>
        <form className= "form" onSubmit={adicionaFilme}>
          <input placeholder="digite o nome do filme" 
          value={nomeFilme} 
          onChange={(evento) => {
            console.log(evento.target.value)
            setNomeFilme(evento.target.value)
          }}
          type="text"/>
          <br/>
          <input placeholder="digite a url da imagem" 
          value={imagemUrlFilme} 
          onChange={(evento) => {
            console.log(evento.target.value)
            setImagemUrlFilme(evento.target.value)
          }}
          type="text"/>
          <br/>
          <ButtonBtn type="submit"/>
        </form>         */