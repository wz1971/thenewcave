import { useParams, Link } from "react-router-dom"

const Goodbye = () => {
  const { orderId } = useParams()
  return (
    <div>
      <h2>Thanks for your purchase</h2>
      <h3>Your Order Id is: {orderId}</h3>
      <Link to={"/"} className="btn btn-light mt-3">
        Back to Home Page
      </Link>
    </div>
  )
}

export default Goodbye
