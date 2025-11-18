import Alert from "react-bootstrap/Alert"

function Welcome() {
  return (
    <Alert variant="secondary" className="mt-3 text-center">
      <Alert.Heading>Benvenuto</Alert.Heading>
      <p>In questa pagina troverai il libro che vuoi</p>
    </Alert>
  )
}

export default Welcome
