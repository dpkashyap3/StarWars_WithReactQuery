import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {
    return (
        
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container">
  <span className="navbar-brand" href="#">Starwars</span>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ml-auto">
      <Link className="nav-item nav-link" to="/people">People</Link>
      <Link className="nav-item nav-link" to="/planets">Planets</Link>
    </div>
  </div>
  </div>
</nav>
            
        
    )
}

export default Navbar
