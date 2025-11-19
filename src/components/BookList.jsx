import { Component } from "react"
import { Container, Row, Col, Form } from "react-bootstrap"
import SingleBook from "./SingleBook"

class BookList extends Component {
  state = {
    searchQuery: "",
  }

  render() {
    const { books } = this.props

    // Filtro i libri in base alla query
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(this.state.searchQuery)
    )

    return (
      <Container className="py-4">
        <Row className="justify-content-start">
          <Col xs={12} md={4}>
            {/* CAMPO DI RICERCA */}
            <Form.Group className="mb-4 rounded-3">
              <Form.Control
                type="text"
                placeholder="Cerca un libro..."
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>

        {/* GRIGLIA DEI LIBRI */}
        <Row className="g-4">
          {filteredBooks.map((book) => (
            <Col key={book.asin} xs={12} sm={6} md={4} lg={3}>
              <SingleBook book={book} />
            </Col>
          ))}
        </Row>
      </Container>
    )
  }
}

export default BookList
