import React from 'react';
import { Link } from 'react-router-dom'; 
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-start">
        <div className="row text-center text-md-start gy-4"> 
          <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
            <h5 className="text-uppercase fw-bold mb-4 text-warning">
              <i className="bi bi-gem me-3"></i>Patliputra Public School
            </h5>
            <p className="text-secondary">
              Nurturing young minds with quality education and strong values in the heart of Siwan, Bihar.
            </p>
          </div>

          
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              Quick Links
            </h6>
            <p className="mb-2">
              <Link to="/about" className="text-secondary text-decoration-none">About Us</Link>
            </p>
            <p className="mb-2">
              <Link to="/academics" className="text-secondary text-decoration-none">Academics</Link>
            </p>
            <p className="mb-2">
              <Link to="/admissions" className="text-secondary text-decoration-none">Admissions</Link>
            </p>
             <p className="mb-2">
              <Link to="/contact" className="text-secondary text-decoration-none">Contact</Link>
            </p>
          </div>

          {/* Contact Info Column */}
          <div className="col-md-5 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p className="text-secondary mb-2"><i className="bi bi-geo-alt-fill me-3"></i>Mahadeva, Siwan, Bihar 841226</p>
            <p className="text-secondary mb-2">
              <i className="bi bi-envelope-fill me-3"></i>
              <a href="mailto:info@patliputraps.edu.in" className="text-secondary text-decoration-none">info@patliputraps.edu.in</a>
            </p>
            <p className="text-secondary mb-2"><i className="bi bi-telephone-fill me-3"></i> +91 98765 43210</p>
           
          </div>

          {/* Social Media Column */}
           <div className="col-md-12 col-lg-2 col-xl-2 mx-auto mb-4 text-center">
              <h6 className="text-uppercase fw-bold mb-4">Follow Us</h6>
              <a href="#" className="btn btn-outline-light btn-floating m-1" role="button">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="btn btn-outline-light btn-floating m-1" role="button">
                <i className="bi bi-twitter"></i>
              </a>
               <a href="#" className="btn btn-outline-light btn-floating m-1" role="button">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="btn btn-outline-light btn-floating m-1" role="button">
                <i className="bi bi-youtube"></i>
              </a>
           </div>

        </div>

        <hr className="my-4" />

        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8 text-center text-md-start">
            <p className="mb-md-0 text-secondary">
              © {currentYear} Patliputra Public School, Siwan. All Rights Reserved.
            </p>
          </div>
          <div className="col-md-5 col-lg-4 text-center text-md-end">
             <p className="mb-0 text-secondary small">
               Designed & Developed with <span className="text-danger">❤️</span> by Abhimanyu Kumar
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;