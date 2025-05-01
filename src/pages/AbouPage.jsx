import React from 'react';
import principalImage from '../assets/principle.png';

function AboutPage() {
  return (
    <main className="container py-5">

      <section className="text-center mb-5 pb-4 border-bottom">
        <h1 className="display-4 fw-bold mb-3">
          <i className="bi bi-bank me-2 text-primary"></i>About Patliputra Public School
        </h1>
        <p className="lead text-muted col-lg-8 mx-auto">
          Discover the foundation, values, and commitment that make our school a center of excellence in Siwan.
        </p>
      </section>

      <section className="row g-5 mb-5 align-items-center">
        <div className="col-lg-6">
          <div className="p-4 bg-light rounded shadow-sm h-100">
            <h2 className="h3 fw-semibold mb-3">
              <i className="bi bi-clock-history me-2 text-success"></i>Our History
            </h2>
            <p className="text-secondary">
              Established in <strong>2016</strong>, Patliputra Public School embarked on a journey with a vision to provide quality education accessible to the community of Siwan. From humble beginnings, we have consistently grown, adapting to modern educational practices while upholding our core values. Over the years, we have nurtured thousands of young minds, celebrating numerous academic and extracurricular achievements that mark our progress and dedication.
            </p>
            <p className="text-secondary mb-0">
              Our commitment remains strong: to build a brighter future, one student at a time.
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="p-4 bg-white rounded shadow-sm h-100 border border-light">
             <h2 className="h3 fw-semibold mb-3">
                <i className="bi bi-bullseye me-2 text-danger"></i>Mission & Vision
             </h2>
            <p>
              <strong>Mission:</strong> Our mission is to provide a stimulating, inclusive, and challenging learning environment that fosters intellectual curiosity, critical thinking, and ethical responsibility. We aim to equip students with the necessary skills and knowledge to succeed in a rapidly changing world.
            </p>
            <p className="mb-0">
               <strong>Vision:</strong> Our vision is to be a leading educational institution recognized for academic excellence, holistic development, and cultivating responsible global citizens who contribute positively to society. We strive to inspire a lifelong love for learning.
            </p>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light rounded shadow-sm mb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 text-center mb-4 mb-lg-0">
              <img
                src={principalImage}
                alt="Principal Name"
                className="img-fluid rounded-circle shadow-lg"
                style={{ maxWidth: '280px', border: '6px solid white' }}
              />
            </div>
            <div className="col-lg-8">
              <h2 className="fw-bold mb-3">
                <i className="bi bi-person-circle me-2 text-primary"></i>A Message from the Principal
              </h2>
              <blockquote className="blockquote fst-italic text-secondary border-start border-4 border-primary ps-3 mb-3">
               "Welcome to Patliputra Public School! It is my privilege to lead an institution dedicated to fostering an environment where every student feels valued, challenged, and inspired. We believe education transcends textbooks; it's about nurturing character, creativity, and compassion. Our exceptional faculty and staff are committed to guiding our students on their journey towards academic success and personal growth. We look forward to partnering with you in shaping the leaders of tomorrow."
              </blockquote>
              <p className="mb-0"><strong>[Principal's Full Name]</strong><br />Principal, Patliputra Public School</p>
            </div>
          </div>
        </div>
      </section>


       <section className="py-5">
          <h2 className="text-center fw-bold mb-4">
            <i className="bi bi-building me-2 text-warning"></i>Our Infrastructure & Facilities
          </h2>
          <p className="lead text-center text-muted col-lg-8 mx-auto mb-5">
              We provide a modern and supportive infrastructure designed to enhance the learning experience and facilitate overall development.
          </p>
          <div className="row g-4 text-center">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm p-3">
                 <i className="bi bi-display fs-1 text-primary mb-3"></i>
                <h4 className="h5 fw-semibold">Smart Classrooms</h4>
                <p className="small text-secondary">Equipped with digital boards and AV aids for interactive learning.</p>
              </div>
            </div>
             <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm p-3">
                 <i className="bi bi-thermometer-sun fs-1 text-success mb-3"></i>
                <h4 className="h5 fw-semibold">Science Labs</h4>
                <p className="small text-secondary">Well-equipped physics, chemistry, and biology labs for practical exploration.</p>
              </div>
            </div>
             <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm p-3">
                 <i className="bi bi-pc-display-horizontal fs-1 text-danger mb-3"></i>
                <h4 className="h5 fw-semibold">Computer Labs</h4>
                <p className="small text-secondary">Modern computer labs with updated software and internet access.</p>
              </div>
            </div>
             <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm p-3">
                 <i className="bi bi-book fs-1 text-info mb-3"></i>
                <h4 className="h5 fw-semibold">Library</h4>
                <p className="small text-secondary">A vast collection of books, journals, and digital resources.</p>
              </div>
            </div>
             <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm p-3">
                 <i className="bi bi-dribbble fs-1 text-secondary mb-3"></i>
                <h4 className="h5 fw-semibold">Sports Facilities</h4>
                <p className="small text-secondary">Expansive grounds and courts for various sports and physical activities.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm p-3">
                 <i className="bi bi-palette fs-1 text-warning mb-3"></i>
                <h4 className="h5 fw-semibold">Arts & Music Room</h4>
                <p className="small text-secondary">Dedicated spaces to nurture creativity and artistic talents.</p>
              </div>
            </div>
             <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm p-3">
                 <i className="bi bi-shield-check fs-1 text-success mb-3"></i>
                <h4 className="h5 fw-semibold">Safe Campus</h4>
                <p className="small text-secondary">Secure environment with surveillance and safety protocols in place.</p>
              </div>
            </div>
             <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm p-3">
                 <i className="bi bi-bus-front fs-1 text-primary mb-3"></i>
                <h4 className="h5 fw-semibold">Transport</h4>
                <p className="small text-secondary">Reliable transportation services covering various routes in the city.</p>
              </div>
            </div>
          </div>
      </section>
    </main>
  );
}

export default AboutPage;