import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="sticky-top"> 
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
       
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src={logo}
              alt="Patliputra Public School Logo"
              width="45" 
              height="45"
              className="d-inline-block align-middle me-2" 
              style={{mixBlendMode:'color-burn'}}
            />
           
            <span className="fw-bold fs-5">
              Patliputra Public School
              <span className="d-none d-sm-inline">, Siwan</span> 
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbarCollapse" 
            aria-controls="mainNavbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainNavbarCollapse">
             
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center text-lg-start"> 
              <li className="nav-item">
                
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active fw-bold" : "nav-link"
                  }
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active fw-bold" : "nav-link"
                  }
                  to="/about"
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active fw-bold" : "nav-link"
                  }
                  to="/academics"
                >
                  Academics
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active fw-bold" : "nav-link"
                  }
                  to="/admissions"
                >
                  Admissions
                </NavLink>
              </li>
             
              <li className="nav-item">
                <NavLink
                   className={({ isActive }) =>
                     isActive ? "nav-link active fw-bold" : "nav-link"
                   }
                   to="/gallery" 
                 >
                   Gallery
                 </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active fw-bold" : "nav-link"
                  }
                  to="/contact"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;