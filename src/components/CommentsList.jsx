import ListGroup from "react-bootstrap/ListGroup"
import SingleComment from "./SingleComment"

const CommentsList = ({ comments }) => {
  return (
    <ListGroup className="mt-3">
      {comments.length === 0 && (
        <ListGroup.Item>Nessun commento presente</ListGroup.Item>
      )}

      {comments.map((comment) => (
        <SingleComment key={comment._id} comment={comment} />
      ))}
    </ListGroup>
  )
}

export default CommentsList
