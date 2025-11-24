import { Component } from "react"
import { Container, Row, Col, Form } from "react-bootstrap"
import SingleBook from "./SingleBook"
import CommentArea from "./CommentArea"

class BookList extends Component {
  state = {
    searchQuery: "",
    selectedAsin: null, // qui salvo l'ASIN del libro selezionato
  }

  render() {
    const { books } = this.props
    const { searchQuery, selectedAsin } = this.state

    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
      <Container className="py-4">
        <Row>
          {/* COLONNA SINISTRA - LIBRI */}
          <Col sm={8}>
            <Row>
              <Col xs={12} md={6} className="mb-4">
                <Form.Control
                  type="text"
                  placeholder="Cerca un libro..."
                  value={searchQuery}
                  onChange={(e) =>
                    this.setState({ searchQuery: e.target.value })
                  }
                />
              </Col>
            </Row>

            <Row className="g-4">
              {filteredBooks.map((book) => (
                <Col key={book.asin} xs={12} sm={12} md={6} lg={4}>
                  <SingleBook
                    book={book}
                    isSelected={selectedAsin === book.asin} // confronto asin
                    onSelect={
                      () => this.setState({ selectedAsin: book.asin }) // salvo asin nello stato
                    }
                  />
                </Col>
              ))}
            </Row>
          </Col>

          {/* COLONNA DESTRA - COMMENTI */}
          <Col sm={4}>
            <div className="position-sticky" style={{ top: "2rem" }}>
              <CommentArea asin={selectedAsin} />
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default BookList
