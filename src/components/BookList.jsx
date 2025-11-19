import { Container, Row, Col } from "react-bootstrap"
import SingleBook from "./SingleBook"

function BookList({ books }) {
  return (
    <Container className="py-4">
      <Row className="g-4">
        {books.map((book) => (
          <Col key={book.asin} xs={12} sm={6} md={4} lg={3}>
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default BookList
