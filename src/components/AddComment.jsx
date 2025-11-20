import { Component } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

class AddComment extends Component {
  state = {
    comment: "",
    rate: "1",
  }

  submitComment = (e) => {
    e.preventDefault()

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTBkYWQzY2Y0YmQ0NzAwMTU4NWIxZDciLCJpYXQiOjE3NjM2NDMxNjQsImV4cCI6MTc2NDg1Mjc2NH0.SfpT5GgCaipzpqzSj8YRwAnJtcAK1D95GNtFcrxD8wI",
      },
      body: JSON.stringify({
        comment: this.state.comment,
        rate: this.state.rate,
        elementId: this.props.asin,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(response.status)
        }
      })

      .catch((err) => console.log(err))
  }

  render() {
    return (
      <Form onSubmit={this.submitComment} className="mt-3">
        <Form.Group>
          <Form.Label>Commento</Form.Label>
          <Form.Control
            type="text"
            value={this.state.comment}
            onChange={(e) => this.setState({ comment: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group className="mt-2">
          <Form.Label>Voto</Form.Label>
          <Form.Select
            value={this.state.rate}
            onChange={(e) => this.setState({ rate: e.target.value })}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
        </Form.Group>

        <Button type="submit" className="mt-3">
          Invia recensione
        </Button>
      </Form>
    )
  }
}

export default AddComment
