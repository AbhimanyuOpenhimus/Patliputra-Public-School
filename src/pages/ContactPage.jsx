import React from 'react';

function ContactPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.classList.add('was-validated');
    if (event.target.checkValidity()) {
      alert("Thank you for contacting us! We will get back to you shortly. (Demo - No data sent)");
      event.target.reset();
      event.target.classList.remove('was-validated');
    }
  };

  return (
    <main className="container py-5">
      <section className="text-center mb-5 pb-4 border-bottom">
        <h1 className="display-4 fw-bold mb-3">
          <i className="bi bi-headset me-2 text-primary"></i>Contact Us
        </h1>
        <p className="lead text-muted col-lg-9 mx-auto">
          We'd love to hear from you! Whether you have questions about admissions, academics, or anything else, please reach out using the details below or send us a message directly.
        </p>
      </section>

      <div className="row g-5 mb-5">
        <div className="col-lg-5">
          <h2 className="h3 fw-semibold mb-4"><i className="bi bi-geo-alt-fill me-2 text-success"></i>Get in Touch</h2>
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-building fs-4 text-primary me-3 mt-1"></i>
                <div>
                  <h4 className="h6 fw-bold mb-1">Our Address</h4>
                  <address className="mb-0 fst-normal text-secondary">
                    Patliputra Public School<br />
                    Near DAV College, Mahadeva,<br />
                    Siwan, Bihar - 841226<br />
                    India
                  </address>
                </div>
              </div>
            </div>
          </div>

           <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <div className="d-flex align-items-start mb-3">
                 <i className="bi bi-telephone-fill fs-4 text-primary me-3 mt-1"></i>
                  <div>
                     <h4 className="h6 fw-bold mb-1">Phone</h4>
                     <p className="mb-0">
                        <a href="tel:+919876543210" className="text-decoration-none text-secondary stretched-link">+91-98765 43210</a>
                     </p>
                  </div>
              </div>
              <hr className="my-2" />
              <div className="d-flex align-items-start">
                  <i className="bi bi-envelope-fill fs-4 text-primary me-3 mt-1"></i>
                  <div>
                     <h4 className="h6 fw-bold mb-1">Email</h4>
                     <p className="mb-0">
                        <a href="mailto:info@patliputraps.edu.in" className="text-decoration-none text-secondary stretched-link">info@patliputraps.edu.in</a>
                     </p>
                  </div>
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
               <div className="d-flex align-items-start">
                  <i className="bi bi-clock-fill fs-4 text-primary me-3 mt-1"></i>
                  <div>
                      <h4 className="h6 fw-bold mb-2">School Office Hours</h4>
                      <ul className="list-unstyled mb-0 text-secondary">
                        <li className="mb-1"><span className="fw-medium">Monday - Friday:</span> 8:00 AM - 2:30 PM</li>
                        <li className="mb-1"><span className="fw-medium">Saturday:</span> 8:30 AM - 12:30 PM</li>
                        <li><span className="fw-medium">Sunday:</span> Closed</li>
                      </ul>
                  </div>
               </div>
            </div>
          </div>
        </div>

        <div className="col-lg-7">
          <div className="bg-light p-4 p-md-5 rounded shadow-sm">
              <h2 className="h3 fw-semibold mb-4"><i className="bi bi-pencil-square me-2 text-success"></i>Send Us a Message</h2>
              <form className="needs-validation" noValidate onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="contactName" className="form-label">Your Name</label>
                    <input type="text" id="contactName" name="name" className="form-control form-control-lg" required />
                    <div className="invalid-feedback">
                      Please enter your name.
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="contactEmail" className="form-label">Your Email</label>
                    <input type="email" id="contactEmail" name="email" className="form-control form-control-lg" required />
                    <div className="invalid-feedback">
                      Please enter a valid email address.
                    </div>
                  </div>
                  <div className="col-12 mb-3">
                    <label htmlFor="contactSubject" className="form-label">Subject</label>
                    <input type="text" id="contactSubject" name="subject" className="form-control form-control-lg" />
                  </div>
                  <div className="col-12 mb-3">
                    <label htmlFor="contactMessage" className="form-label">Message</label>
                    <textarea id="contactMessage" name="message" rows="6" className="form-control form-control-lg" required></textarea>
                    <div className="invalid-feedback">
                      Please enter your message.
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-success btn-lg w-100">
                        <i className="bi bi-send-fill me-2"></i>Send Message
                    </button>
                  </div>
                </div>
              </form>
           </div>
        </div>
      </div>

      <section className="mt-5 pt-4 border-top">
        <h2 className="h3 text-center fw-semibold mb-4"><i className="bi bi-map-fill me-2 text-danger"></i>Find Us on the Map</h2>
        <div className="ratio ratio-16x9 rounded overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.17248885066!2d84.34891951503048!3d26.22340098342957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992fd5012b906a1%3A0x25edf2850badabbb!2sPatliputra%20Public%20School!5e0!3m2!1sen!2sin!4v1678886400000!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Patliputra Public School Location Map"
          ></iframe>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;