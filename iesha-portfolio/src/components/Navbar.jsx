import React from 'react';


const Navbar = () => {
  return (
    <>
    <div className='navbar'>
      <nav className="navbar navbar-light bg-light px-3">
        <a className="navbar-brand" href="www.google.com">
          Navbar
        </a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading1">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading2">
              Contact
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              Projects
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#scrollspyHeading3">
                  Voyage Hawk
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#scrollspyHeading4">
                  E-Portfolio
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#scrollspyHeading5">
                  Fifth
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      </div>
    </>
  );
};

export default Navbar;
