import Card from "react-bootstrap/Card"

function SingleBook({ book }) {
  return (
    <Card style={{ height: "100%" }}>
      <Card.Img
        variant="top"
        src={book.img}
        alt={book.title}
        style={{ height: "18rem" }}
      />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default SingleBook
