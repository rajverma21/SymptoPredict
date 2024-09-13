import React from 'react'
import logo from "../../assets/logo.svg"

const Footer = () => {
  return (
    <footer className=" absolute bottom-0 w-full bg-[#25427B] rounded-t-full">
        <div  className="w-[80%] m-auto">
            <div>
            <div><img src={logo} alt="Logo" /></div>
            <div></div>
            <div></div>
            </div>
        </div>
    </footer>
  )
}

export default Footer