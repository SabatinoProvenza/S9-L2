import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { Component } from "react"

class SingleBook extends Component {
  state = {
    selected: false,
  }

  render() {
    const { book } = this.props

    return (
      <Card
        style={{
          height: "100%",
          cursor: "pointer",
          border: this.state.selected
            ? "2px solid #ff0000ff"
            : "1px solid #d4d4d4ff",
          transform: this.state.selected ? "scale(1.03)" : "scale(1)",
          transition: "transform 0.2s ease-in-out",
        }}
        onClick={() => this.setState({ selected: !this.state.selected })}
      >
        <Card.Img
          variant="top"
          src={book.img}
          alt={book.title}
          style={{ height: "20rem" }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="flex-grow-1">{book.title}</Card.Title>
          <Card.Text>{book.price}</Card.Text>
          <Button variant="primary" className="align-self-start">
            Acquista
          </Button>
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook
