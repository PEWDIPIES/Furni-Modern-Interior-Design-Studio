import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav
        className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
        arial-label="Furni navigation bar"
      >
        <div className="container">
       <Link to='/'>
       <a className="navbar-brand">
            Furni<span>.</span>
          </a>
       </Link>  

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsFurni"
            aria-controls="navbarsFurni"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsFurni">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item active">
              <Link to='/' ><a className="nav-link">
                  Home
                </a></Link>  
              </li>
              <li className="nav-item">
              <Link to='/Shop' ><a className="nav-link">
                  Shop
                </a></Link>  
              </li>
              <li className="nav-item">
              <Link to='/Aboutus' ><a className="nav-link">
                  About-us
                </a></Link>  
              </li>
              <li className="nav-item">
              <Link to='/Services' ><a className="nav-link">
                  Service
                </a></Link>  
              </li>

              <li className="nav-item">
              <Link to='/Blog' ><a className="nav-link">
                  Blog
                </a></Link>  
              </li>
              <li className="nav-item">
              <Link to='/Contactus' ><a className="nav-link">
              Contact
                </a></Link>  
              </li>
            </ul>

          
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
