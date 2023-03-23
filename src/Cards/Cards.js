import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import ReactStars from 'react-stars';

function Cards({movie}) {
const navigate=useNavigate()
  return (
    <Card style={{ width: '18rem',marginTop:'35px',backgroundColor:'transparent' }}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title} </Card.Title>
        <Card.Text>{movie.description} </Card.Text>
        <ReactStars 
        size={26}
        count={5}
        half={false}
        edit={false}
        value={movie.rate}
        />
      </Card.Body>
      <Button onClick={()=>navigate(`/movie/${movie.id}`)}>Details</Button>

    </Card>
  );
}

export default Cards;