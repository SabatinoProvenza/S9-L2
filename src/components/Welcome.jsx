import Alert from "react-bootstrap/Alert"
import { Container, Row, Col } from "react-bootstrap"

function Welcome() {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <Alert variant="secondary" className="mt-3 text-center" role="alert">
            <Alert.Heading>Benvenuto</Alert.Heading>
            <p>In questa pagina troverai il libro che vuoi</p>
          </Alert>
        </Col>
      </Row>
    </Container>
  )
}

export default Welcome
