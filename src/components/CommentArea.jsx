import { Component } from "react"
import ListGroup from "react-bootstrap/ListGroup"

class CommentArea extends Component {
  state = {
    comments: [],
  }

  comments = () => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTBkYWQzY2Y0YmQ0NzAwMTU4NWIxZDciLCJpYXQiOjE3NjM2NDMxNjQsImV4cCI6MTc2NDg1Mjc2NH0.SfpT5GgCaipzpqzSj8YRwAnJtcAK1D95GNtFcrxD8wI",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("la chiamata non è ok: " + response.status)
        }
      })
      .then((data) => {
        this.setState({ comments: data })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.comments()
  }

  render() {
    const { comments } = this.state

    return (
      <ListGroup className="mt-3">
        {comments.length === 0 && (
          <ListGroup.Item>Nessun commento presente</ListGroup.Item>
        )}

        {comments.map((comment) => (
          <ListGroup.Item key={comment._id}>
            <strong>{comment.rate}/5</strong> – {comment.comment}
          </ListGroup.Item>
        ))}
      </ListGroup>
    )
  }
}

export default CommentArea
