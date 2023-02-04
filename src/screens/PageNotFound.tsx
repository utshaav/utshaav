import React from 'react'
import image from "../assets/images/pnf.gif";

function PageNotFound() {
  return (
    <div>
      <img 
        className="container d-flex align-items-center justify-content-center" 
        src={image} style={{ height: '91.9vh', width: 'fit-content' }}
        alt="Page not found" />
        {/* <p className='d-flex align-items-center justify-content-center'>Sorry, the page is not found</p> */}
    </div>
  )
}

export default PageNotFound