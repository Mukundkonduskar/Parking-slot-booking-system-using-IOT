import React from 'react'
import './Footer.css'

export const Footer = () => {
  
  let footerStyle = {
    position:"relative",
    // top:"20vh",
    width:"100%",
    padding:"2px"

  }
  
  
  return (
    <footer className='bg-dark text-light py-15' style={footerStyle}>
      <p className="text-center">
      parkyourride.com Copyright &copy; 2023-2025 Konduskar Industries Pvt. Ltd. All rights reserved 
    </p>
    </footer>
  )
}
