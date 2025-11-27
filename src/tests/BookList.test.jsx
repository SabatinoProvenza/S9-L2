import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import BookList from "../components/BookList"
import books from "../scifi.json"

describe("BookList", () => {
  it("renderizza tante bootstrap cards quanti sono i libri nel JSON", () => {
    render(<BookList books={books} />)

    const buttonCards = screen.getAllByText(/acquista/i)
    expect(buttonCards).toHaveLength(books.length)
  })
})
