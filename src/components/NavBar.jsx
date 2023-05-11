import React from 'react'
import '../App.css'
import pipeicon from './images/pipeicon.png'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand p-1" href="#">
            <img src={pipeicon} alt="Brand Logo" width="50" height="50" className="mx-3 brandlogo"></img>
            The New Cave
          </a>
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
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Alcoholic Beverages
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Cigars
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Pipes
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Tobacco
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Accesories
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-secondary" type="submit">
                Search
              </button>
            </form>
            <CartWidget/>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
