import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.scss'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/"  className="navbar-brand" >
          <span className='branding'>Utsav</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/stopwatch" className='nav-link'>Stopwatch</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar