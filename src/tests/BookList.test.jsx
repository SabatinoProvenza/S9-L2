import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import BookList from "../components/BookList"
import books from "../scifi.json"

describe("BookList", () => {
  it("renderizza tante bootstrap cards quanti sono i libri nel JSON", () => {
    render(<BookList books={books} />)

    const buttonCards = screen.getAllByText(/acquista/i)
    expect(buttonCards).toHaveLength(books.length)
  })

  it("filtra i libri in base all'input inserito", () => {
    render(<BookList books={books} />)

    const input = screen.getByPlaceholderText(/cerca un libro/i)

    fireEvent.change(input, { target: { value: "pandemic" } })

    expect(screen.getByText(/pandemic/i)).toBeInTheDocument()

    expect(screen.queryByText(/harry potter/i)).toBeNull()
  })

  it("riduce il numero di libri dopo il filtro", () => {
    render(<BookList books={books} />)

    const initialCards = screen.getAllByText(/acquista/i)

    const input = screen.getByPlaceholderText(/cerca un libro/i)
    fireEvent.change(input, { target: { value: "star" } })

    const filteredCards = screen.getAllByText(/acquista/i)

    expect(filteredCards.length).toBeLessThan(initialCards.length)
  })

  it("non mostra libri se il filtro non trova corrispondenze", () => {
    render(<BookList books={books} />)

    const input = screen.getByPlaceholderText(/cerca un libro/i)

    fireEvent.change(input, { target: { value: "zzzz" } })

    expect(screen.queryByText(/acquista/i)).toBeNull()
  })
})
