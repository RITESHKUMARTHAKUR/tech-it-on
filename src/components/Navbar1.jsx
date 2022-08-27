import React from 'react'

function Navbar1() {
  return (
    <nav class="navbar navbar-expand-lg bg-dark">
    <div class="container-fluid ">
      <a class="navbar-brand text-light" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item mx-3">
            <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item mx-3">
            <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item mx-3">
            <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
          </li>
        </ul>
        <form class="d-flex mx-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success text-light" type="submit">Search</button>
        </form>
        <li class="nav-item mx-3">
        <button class="btn btn-outline-success text-light" type="submit">SignUp</button>
        </li>
      </div>
    </div>
  </nav>
  );
}

export default Navbar1
