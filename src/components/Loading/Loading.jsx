import React from "react"
import "./Loading.css"
const Loading = () => {
  return (
    <div className="container-fluid vh-100" id="mainContainer">
      <div className="row position-fixed top-50 start-50 translate-middle">
        <div className="col p-5 text-center">
          <div className="spinner-grow text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="py-3">
            <h3 className="fw-bold">Loading...</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loading
