// import "./header.scss"
import React from "react"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div className="header">
      <div className="header-wrapper">
        <Link to="/">
          <p className="navbar__logo">
            <span>FoodStuff</span>
          </p>
        </Link>
        <div className="navbar">
          <div className="navbar__link"></div>
        </div>
      </div>
    </div>
  )
}
