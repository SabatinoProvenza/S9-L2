import Card from "react-bootstrap/Card"

function SingleBook(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.img} alt={props.title} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default SingleBook
