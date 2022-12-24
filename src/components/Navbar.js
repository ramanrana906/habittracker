import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    <div className="collapse navbar-collapse justify-content-center" id="navbarCenteredExample">
    <ul className="navbar-nav mb-2 mb-lg-0">
    <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/add">Add New Habit</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/detail">Detailed View</Link>
    </li>
    </ul>
    </div>
    </div>
    </nav>
    </div>
  )
}

export default Navbar



