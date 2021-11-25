import Card  from 'react-bootstrap/Card'
import axios  from 'axios'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import Container from '../Container/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import { GrLike } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import '../Cards/Cards.css';
import { useNavigate } from 'react-router-dom';

export default function Cards(props) {

  const navigate = useNavigate();

  const goToGamePage = () => {
    navigate('/game', { state:props.id })
  }

  const wishGame = () => {
    const token = localStorage.token;
    const config = {
      headers: {  Authorization: `Bearer ${token}`}
    }

    const id = props.id;

    axios.get(`/game/wish/${id}`, config)
  }


  return (
    <Container>
    <div className='card'>
      <Card style={{ width: '18rem' }} onClick={goToGamePage}>
        
        <Card.Img variant="top" src={props.image} />

        <Card.Body>
          <Card.Title>{props.title}</Card.Title>      
        </Card.Body>

        <ListGroup className="list-group-flush">
          <ListGroupItem>Preço: {'R$ ' + props.preco} </ListGroupItem>               
        </ListGroup> 

        
               
               

      </Card>  
      <button onClick={wishGame}>
          <GrLike/>
        </button>    
    </div>
    </Container>




    
  )
}



