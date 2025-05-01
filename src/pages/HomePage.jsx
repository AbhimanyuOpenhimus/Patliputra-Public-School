import React from 'react';
import { Link } from 'react-router-dom';

import heroBannerImage from '../assets/slide.jpg'; 
import principalImage from '../assets/principle.png'; 
function HomePage() {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${heroBannerImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    minHeight: '80vh', 
  };

  return (
    <>
      {/* --- Hero Section --- */}
      <section
        className="d-flex align-items-center justify-content-center text-center"
        style={heroStyle}
      >
        <div className="container py-5 " style={{marginTop:180}}>
          <h1 className="display-4 fw-bold mb-3 text-warning">Welcome to Patliputra Public School</h1>
          <p className="lead col-lg-9 mx-auto mb-4">
            Empowering students with knowledge, skills, and values for a successful and fulfilling life. Discover the difference in Siwan's premier educational institution.
          </p>
          <Link className="btn btn-primary btn-lg me-2 mb-2" to="/admissions" role="button">Apply for Admission</Link>
          <Link className="btn btn-outline-light btn-lg mb-2" to="/about" role="button">Learn More</Link>
        </div>
      </section>

      {/* --- About Summary Section --- */}
      <section className="py-5 text-center bg-light">
        <div className="container">
          <h2 className="display-6 fw-bold mb-4">About Our School</h2>
          <p className="lead col-lg-8 mx-auto mb-4">
            Patliputra Public School, situated in the vibrant city of Siwan, is committed to delivering exceptional education and fostering holistic development. We provide a nurturing and challenging environment where students are encouraged to reach their full potential.
          </p>
          <Link to="/about" className="btn btn-outline-secondary btn-lg">Explore Our Mission & Vision</Link>
        </div>
      </section>

       {/* --- Principal's Message Section --- */}
       <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 text-center text-lg-start mb-4 mb-lg-0">
              <img
                src={principalImage}
                alt="Principal Name"
                className="img-fluid rounded-circle shadow"
                style={{ maxWidth: '250px', border: '5px solid #eee' }}
              />
            </div>
            <div className="col-lg-8">
              <h2 className="fw-bold mb-3">A Message from the Principal</h2>
              <p className="text-muted mb-3">
                "Welcome to Patliputra Public School! We believe in creating a learning atmosphere that is both challenging and supportive. Our dedicated faculty works tirelessly to ensure every student receives personalized attention and guidance. We are proud of our students' achievements and the strong community we have built together. We invite you to join our family and embark on a journey of discovery and growth."
              </p>
              <p><strong>[Principal's Name]</strong><br />Principal, Patliputra Public School</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Highlights/Why Choose Us Section --- */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Why Choose Patliputra Public School?</h2>
          <div className="row g-4 text-center">
            <div className="col-md-4">
              <div className="p-4 bg-white rounded shadow-sm h-100">
                 <i className="bi bi-mortarboard-fill fs-1 text-primary mb-3"></i>
                <h4 className="fw-semibold mb-2">Academic Excellence</h4>
                <p className="text-muted">Rigorous curriculum aligned with modern educational standards, fostering critical thinking and deep understanding.</p>
              </div>
            </div>
            <div className="col-md-4">
               <div className="p-4 bg-white rounded shadow-sm h-100">
                 <i className="bi bi-people-fill fs-1 text-success mb-3"></i>
                <h4 className="fw-semibold mb-2">Experienced Faculty</h4>
                <p className="text-muted">Dedicated and qualified teachers committed to nurturing student potential in a supportive environment.</p>
               </div>
            </div>
            <div className="col-md-4">
               <div className="p-4 bg-white rounded shadow-sm h-100">
                 <i className="bi bi-building fs-1 text-info mb-3"></i>
                <h4 className="fw-semibold mb-2">Modern Infrastructure</h4>
                <p className="text-muted">Well-equipped classrooms, labs, library, and sports facilities to support comprehensive learning.</p>
               </div>
            </div>
          </div>
        </div>
      </section>


      {/* --- Grid Section (News, Events, Links) --- */}
      <section className="py-5">
        <div className="container">
            <div className="row g-4">
                <div className="col-md-6 col-lg-4 d-flex align-items-stretch">
                <div className="card h-100 shadow-sm border-0">
                    <div className="card-body text-center d-flex flex-column">
                    <i className="bi bi-newspaper fs-1 text-primary mb-3"></i>
                    <h3 className="card-title h4 fw-semibold">Latest News</h3>
                    <p className="card-text">Annual Sports Day announced for next month! Get ready for exciting competitions and team spirit.</p>
                     {/* <Link to="/news" className="btn btn-sm btn-outline-primary mt-auto">Read More News</Link> */}
                    </div>
                </div>
                </div>

                <div className="col-md-6 col-lg-4 d-flex align-items-stretch">
                <div className="card h-100 shadow-sm border-0">
                    <div className="card-body text-center d-flex flex-column">
                    <i className="bi bi-calendar-event fs-1 text-success mb-3"></i>
                    <h3 className="card-title h4 fw-semibold">Upcoming Events</h3>
                    <p className="card-text">Science Exhibition coming up on [Date]. Stay tuned for participation details and project guidelines.</p>
                    {/* <Link to="/events" className="btn btn-sm btn-outline-success mt-auto">View Calendar</Link> */}
                   </div>
                </div>
                </div>

                <div className="col-md-12 col-lg-4 d-flex align-items-stretch">
                <div className="card h-100 shadow-sm border-0">
                    <div className="card-body text-center d-flex flex-column">
                        <i className="bi bi-link-45deg fs-1 text-info mb-3"></i>
                        <h3 className="card-title h4 fw-semibold">Quick Links</h3>
                        <ul className="list-unstyled mb-0 mt-auto">
                            <li className="mb-2"><Link to="/academics" className="text-decoration-none fs-5">Academics</Link></li>
                            <li className="mb-2"><Link to="/admissions" className="text-decoration-none fs-5">Admissions</Link></li>
                            <li className="mb-2"><Link to="/gallery" className="text-decoration-none fs-5">Gallery</Link></li>
                            <li><Link to="/contact" className="text-decoration-none fs-5">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- Final Call to Action --- */}
      <section className="py-5 text-center bg-primary text-white">
          <div className="container">
              <h2 className="fw-bold mb-3 text-warning">Ready to Join Us?</h2>
              <p className="lead mb-4">Become a part of the Patliputra Public School family. Contact us for inquiries or schedule a visit.</p>
              <Link className="btn btn-light btn-lg me-2" to="/contact" role="button">Contact Us</Link>
              <Link className="btn btn-outline-light btn-lg" to="/admissions" role="button">Admission Process</Link>
          </div>
      </section>
    </>
  );
}

export default HomePage;