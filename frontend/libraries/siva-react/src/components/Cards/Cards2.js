import {Card,Button} from 'react-bootstrap'
import img1 from '../../assets/img/rrr.jpg'

function Cards2() {
    return (
        <>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={img1} />
    <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    </Card>
        </>
    )
}

export default Cards2
