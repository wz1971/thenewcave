import React from "react"
import "./NavBar.css"
import pipeicon from "../images/pipeicon.png"
import CartWidget from "../Cart/CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg border-bottom border-warning border-5">
      <div className="container">
        <Link className="navbar-brand p-1 fs-2" to="/">
          <img src={pipeicon} alt="Brand Logo" width="50" height="50" className="mx-3 brandlogo"></img>
          The New Cave
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li>
              <Link className="nav-link fs-4 ps-5 mx-5" to={"/category/whisky"}>
                Whisky
              </Link>
            </li>
            <li>
              <Link className="nav-link fs-4 mx-5" to={"/category/pipes"}>
                Pipes
              </Link>
            </li>
            <li>
              <Link className="nav-link fs-4 mx-5" to={"/category/tobacco"}>
                Tobacco
              </Link>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
