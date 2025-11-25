import { useState, useEffect } from "react"
import CommentsList from "./CommentsList"
import AddComment from "./AddComment"

const CommentArea = function ({ asin }) {
  const [comments, setComments] = useState([])

  const takeComments = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTBkYWQzY2Y0YmQ0NzAwMTU4NWIxZDciLCJpYXQiOjE3NjM2NDMxNjQsImV4cCI6MTc2NDg1Mjc2NH0.SfpT5GgCaipzpqzSj8YRwAnJtcAK1D95GNtFcrxD8wI",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(response.status)
        }
      })
      .then((data) => setComments(data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    takeComments()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asin])

  if (!asin) {
    return (
      <p className="text-muted">Seleziona un libro per vedere i commenti</p>
    )
  }

  return (
    <>
      <CommentsList comments={comments} />
      <AddComment asin={asin} refreshComments={takeComments} />
    </>
  )
}

export default CommentArea
