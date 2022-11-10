import React from 'react'
import image from "../assets/images/pnf.gif";

function PageNotFound() {
  return (
    <div>
      <img 
        className="container d-flex align-items-center justify-content-center" 
        src={image} style={{ height: '400px', width: 'fit-content' }}
        alt="Mero pic lol" />
        <p className='d-flex align-items-center justify-content-center'>Sorry, the page is not found</p>
    </div>
  )
}

export default PageNotFound