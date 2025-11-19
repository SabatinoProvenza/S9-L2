import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import Welcome from "./components/Welcome"
//import AllTheBooks from "./components/AllTheBooks"
//import SingleBook from "./components/SingleBook"
import BookList from "./components/BookList"
import books from "./scifi.json"
// const libro = {
//   asin: "1940026091",
//   title: "Pandemic (The Extinction Files, Book 1)",
//   img: "https://images-na.ssl-images-amazon.com/images/I/91xrEMcvmQL.jpg",
//   price: 7.81,
//   category: "scifi",
// }

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <BookList books={books} />
      {/* <SingleBook book ={libro} /> */}
      {/* <AllTheBooks /> */}
      <MyFooter />
    </>
  )
}

export default App
