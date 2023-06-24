import { useParams, Link } from "react-router-dom"
import Carousel from "../Carousel/Carousel"

const Goodbye = () => {
  const { orderId } = useParams()
  return (
    <div>
      <Carousel />
      <div className="position-fixed top-50 start-50 translate-middle">
        <div className="p-3 text-center text-primary-emphasis bg-secondary-subtle border border-secondary-subtle rounded-3 opacity-75 fw-bold">
          <h2 className="text-center">Thanks for your purchase</h2>
          <h5>Your OrderId</h5>
          <p>{orderId}</p>
          <Link to={"/"} className="btn btn-light mt-3">
            Back to Home Page
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Goodbye
