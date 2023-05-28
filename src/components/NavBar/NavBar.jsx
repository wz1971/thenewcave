import React from "react"
import "./NavBar.css"
import pipeicon from "../images/pipeicon.png"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg border-bottom border-warning border-3">
        <div className="container-fluid">
          <Link className="navbar-brand p-1" to="/">
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
                <Link className="nav-link" to={"/category/whisky"}>
                  Whisky
                </Link>
              </li>
              <li>
                <Link className="nav-link" to={"/category/pipes"}>
                  Pipes
                </Link>
              </li>
              <li>
                <Link className="nav-link" to={"/category/tobacco"}>
                  Tobacco
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-secondary" type="submit">
                Search
              </button>
            </form>
            <CartWidget />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
