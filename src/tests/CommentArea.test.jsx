import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import CommentArea from "../components/CommentArea"

describe("CommentArea", () => {
  it("viene renderizzato correttamente quando asin è null", () => {
    render(<CommentArea asin={null} />)

    const message = screen.getByText(
      /seleziona un libro per vedere i commenti/i
    )

    expect(message).toBeInTheDocument()
  })
})
