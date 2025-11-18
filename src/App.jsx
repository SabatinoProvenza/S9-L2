import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import AllTheBooks from "./components/AllTheBooks"

function App() {
  return (
    <>
      <MyNav />
      <AllTheBooks />
      <MyFooter />
    </>
  )
}

export default App
