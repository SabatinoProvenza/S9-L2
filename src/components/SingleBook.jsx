import { Component } from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

class SingleBook extends Component {
  render() {
    const { book, onSelect, isSelected } = this.props

    return (
      <Card
        style={{
          cursor: "pointer",
          border: isSelected ? "2px solid #ff0000" : "1px solid #d4d4d4",
          transform: isSelected ? "scale(1.03)" : "scale(1)",
          transition: "transform 0.2s ease-in-out",
        }}
        onClick={onSelect}
        className="h-100"
      >
        <Card.Img
          className="img-fluid  "
          variant="top"
          src={book.img}
          alt={book.title}
          style={{ height: "15rem" }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="flex-grow-1">{book.title}</Card.Title>
          <Card.Text>{book.price} €</Card.Text>
          <Button variant="primary" className="align-self-start">
            Acquista
          </Button>
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook
