// Navbar.js
import React from 'react';


const Navbar = () => {
  return (
    <nav className="navbar navbar-custom fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Iesha's Portfolio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Iesha's Portfolio</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="./">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="./About">About Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="./Projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="./Contact">Contact</a>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
