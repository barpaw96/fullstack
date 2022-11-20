import React from 'react'
import 'bootstrap/dist/js/bootstrap'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>

<nav class="navbar navbar-expand-lg bg-info">
  <div class="container-fluid">
  <Link class="navbar-brand" to='/'>
        Fullstack Application 
  </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Formularze
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/adduser">Dodawanie użytkowniak</Link></li>
            <li><Link class="dropdown-item" to="/list">Lista</Link></li>
            </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Elementy graficzne
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/caruzel">Karuczela</Link></li>
            <li><Link class="dropdown-item" to="/panel">Panel</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
        <Link class='nav-link active' to="/tictactoe">Gra</Link>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>




</div>








  )
}
