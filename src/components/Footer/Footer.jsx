import React from "react"
import "./Footer.css"
import facebooklogo from "../images/facebook.svg"
import instagramlogo from "../images/instagram.svg"
import whatsapplogo from "../images/whatsapp.svg"

const Footer = () => {
  return (
    <div className="container-fluid py-2 footer border-top border-warning border-5">
      <ul id="logoList">
        <li>
          <div>
            <a href="https://facebook.com">
              <img src={facebooklogo} alt="Facebook Logo" className="footerLogos" />
            </a>
          </div>
        </li>
        <li>
          <div>
            <a href="https://instagram.com">
              <img src={instagramlogo} alt="Instagram Logo" className="footerLogos" />
            </a>
          </div>
        </li>
        <li>
          <div>
            <a href="https://whatsapp.com">
              <img src={whatsapplogo} alt="Whatsapp Logo" className="footerLogos" />
            </a>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Footer
