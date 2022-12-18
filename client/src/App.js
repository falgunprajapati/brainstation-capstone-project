import { BrowserRouter as Router } from "react-router-dom"
import React from "react"
import Header from "./components/Header/Header"
// import "./App.scss"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <Router>
      <Header />
      <div className="container"></div>
      <Footer />
    </Router>
  )
}

export default App
