import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { Link } from "react-router-dom";

const Footer = () => {
  const [firstname, setfirstname] = useState("");
  const [email, setemail] = useState("");

  const submitform = (e) => {
    e.preventDefault();
    setfirstname("");
    setemail("");
    alert("Your information has been submitted. Please wait, it will be processed within 1 day.");
  };

  return (
    <footer className="footer-section">
      <div className="container relative">
        <div className="sofa-img">
          <img src="/src/assets/images/sofa.png" alt="Sofa" className="img-fluid" />
        </div>

        <div className="row">
          <div className="col-lg-8">
            <div className="subscription-form">
              <h3 className="d-flex align-items-center">
                <span className="me-1">
                  <img
                    src="/src/assets/images/envelope-outline.svg"
                    alt="Envelope"
                    className="img-fluid"
                  />
                </span>
                <span>Subscribe to Newsletter</span>
              </h3>

              <form onSubmit={submitform} className="row g-3">
                <div className="col-auto">
                  <input
                    type="text"
                    className="form-control" required
                    placeholder="Enter your name"
                    value={firstname}
                    onChange={(e) => setfirstname(e.target.value)}
                  />
                </div>
                <div className="col-auto">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email" required
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>
                <div className="col-auto">
                  <button className="btn btn-primary">
                    <LuSend />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="row g-5 mb-5">
          <div className="col-lg-4">
            <div className="mb-4 footer-logo-wrap">
              <Link to='/'>
              <a  className="footer-logo">
                Furni<span>.</span>
              </a>
              </Link>
            
            </div>
            <p className="mb-4">
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada.
            </p>

            <ul className="list-unstyled custom-social">
              <li>
                <a href="#">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-8">
            <div className="row links-wrap">
              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li>
                 <Link to='/Aboutus'>
                 <a>About us</a></Link>   
                  </li>
                  <li>
                 <Link to='/Services'>
                 <a>Services</a></Link>   
                  </li>
                  <li>
                 <Link to='/Blog'>
                 <a>Blog</a></Link>   
                  </li>
                  <li>
                 <Link to='/Contact'>
                 <a>Contact us</a></Link>   
                  </li>
                </ul>
              </div>

              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Support</a>
                  </li>
                  <li>
                    <a href="#">Knowledge base</a>
                  </li>
                  <li>
                    <a href="#">Live chat</a>
                  </li>
                </ul>
              </div>

              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Jobs</a>
                  </li>
                  <li>
                    <a href="#">Our team</a>
                  </li>
                  <li>
                    <a href="#">Leadership</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>

              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Nordic Chair</a>
                  </li>
                  <li>
                    <a href="#">Kruzo Aero</a>
                  </li>
                  <li>
                    <a href="#">Ergonomic Chair</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
