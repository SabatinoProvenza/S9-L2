import { Component } from "react"
import CommentsList from "./CommentsList"
import AddComment from "./AddComment"

class CommentArea extends Component {
  state = {
    comments: [],
  }

  takeComments = () => {
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
          throw new Error(response.status)
        }
      })
      .then((data) => this.setState({ comments: data }))
      .catch((err) => console.log(err))
  }

  componentDidMount() {
    this.takeComments()
  }

  componentDidUpdate(prevProps) {
    // se l'asin cambia, rifaccio la fetch
    if (prevProps.asin !== this.props.asin) {
      this.takeComments()
    }
  }

  render() {
    if (!this.props.asin) {
      return (
        <p className="text-muted">Seleziona un libro per vedere i commenti</p>
      )
    }

    return (
      <>
        <CommentsList comments={this.state.comments} />
        <AddComment
          asin={this.props.asin}
          refreshComments={this.takeComments}
        />
      </>
    )
  }
}

export default CommentArea
