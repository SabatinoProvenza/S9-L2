import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { Container, Row, Col } from "react-bootstrap"
import books from "../scifi.json"

function AllTheBooks() {
  return (
    <Container className="py-4">
      <Row className="g-4">
        {books.map((libro) => (
          <Col key={libro.asin} xs={12} sm={6} md={4} lg={3}>
            <Card style={{ height: "100%" }}>
              <Card.Img
                variant="top"
                style={{ height: "18rem", objectFit: "cover", width: "100%" }}
                src={libro.img}
              />
              <Card.Body className="d-flex flex-column justify-content-end">
                <Card.Title className="flex-grow-1">{libro.title}</Card.Title>
                <Card.Text>{libro.price} €</Card.Text>
                <Button variant="primary">Acquista</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default AllTheBooks
