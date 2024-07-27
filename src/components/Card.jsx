import React from 'react'
import { IoLogoWhatsapp } from 'react-icons/io5'
import { IoCallSharp } from "react-icons/io5";

const Card = () => {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">Reach out to us and set an appointment</h2>
       
      </div>
      <div className="bottom">
      <a href='https://wa.me/message/LL4IB5RMLFQVP1'
      style={{
          color: 'inherit',
          textDecoration: 'none',
        }}><p><IoLogoWhatsapp /> </p> <h2>Send us a message on Whatsapp</h2></a>
      <a href='tel:+263788147289' style={{
          color: 'inherit',
          textDecoration: 'none',
        }}><p><IoCallSharp /> </p> <h2>Give us a Call</h2></a>
       
      </div>
    </div>
  )
}

export default Card
