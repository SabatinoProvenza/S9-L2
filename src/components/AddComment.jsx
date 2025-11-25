import { useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const AddComment = function ({ asin, refreshComments }) {
  const [formData, setFormData] = useState({
    comment: "",
    rate: "1",
  })

  const submitComment = (e) => {
    e.preventDefault()

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTBkYWQzY2Y0YmQ0NzAwMTU4NWIxZDciLCJpYXQiOjE3NjM2NDMxNjQsImV4cCI6MTc2NDg1Mjc2NH0.SfpT5GgCaipzpqzSj8YRwAnJtcAK1D95GNtFcrxD8wI",
      },
      body: JSON.stringify({
        comment: formData.comment,
        rate: formData.rate,
        elementId: asin,
      }),
    })
      .then((response) => {
        if (response.ok) {
          // aggiorna lista commenti
          refreshComments()

          // reset form
          setFormData({
            comment: "",
            rate: "1",
          })
        } else {
          throw new Error(response.status)
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <Form onSubmit={submitComment} className="mt-3">
      <Form.Group>
        <Form.Label>Commento</Form.Label>
        <Form.Control
          type="text"
          value={formData.comment}
          onChange={(e) =>
            setFormData({ ...formData, comment: e.target.value })
          }
          required
        />
      </Form.Group>

      <Form.Group className="mt-2">
        <Form.Label>Voto</Form.Label>
        <Form.Select
          value={formData.rate}
          onChange={(e) => setFormData({ ...formData, rate: e.target.value })}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Select>
      </Form.Group>

      <Button type="submit" className="mt-3">
        Invia recensione
      </Button>
    </Form>
  )
}

export default AddComment
