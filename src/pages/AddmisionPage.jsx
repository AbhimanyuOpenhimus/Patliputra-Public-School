import React from 'react';
import { Link } from 'react-router-dom';

function AdmissionsPage() {
  const admissionStatus = "Open";
  const currentAcademicYear = "2024-2025";

  return (
    <main className="container py-5">
      <section className="text-center mb-5 pb-4 border-bottom">
        <h1 className="display-4 fw-bold mb-3">
          <i className="bi bi-door-open-fill me-2 text-primary"></i>Admissions
        </h1>
        <p className="lead text-muted col-lg-9 mx-auto">
          Join the Patliputra Public School family. Find information on our admission process, eligibility, required documents, and timelines for the upcoming academic year.
        </p>
      </section>

      <section className="mb-5">
        <div className={`alert ${admissionStatus === "Open" ? 'alert-success' : 'alert-warning'} d-flex align-items-center shadow-sm`} role="alert">
           <i className={`bi ${admissionStatus === "Open" ? 'bi-check-circle-fill' : 'bi-exclamation-triangle-fill'} me-3 fs-4`}></i>
           <div>
             Admissions for the Academic Year <strong>{currentAcademicYear}</strong> are currently <strong>{admissionStatus}</strong>.
             {admissionStatus === "Open" && " We welcome prospective parents and students to begin the application process."}
             {admissionStatus !== "Open" && " Please check back later or contact the school office for future updates."}
          </div>
        </div>
      </section>

      <section className="mb-5 p-4 p-md-5 bg-light rounded shadow-sm">
        <h2 className="h3 fw-semibold mb-4 text-center text-md-start">
            <i className="bi bi-arrow-right-circle-fill me-2 text-primary"></i>Our Admission Process
        </h2>
        <p className="text-center text-md-start text-secondary mb-4">
            We follow a clear and structured process to ensure a smooth admission experience.
        </p>
        <ol className="list-group list-group-numbered list-group-flush">
          <li className="list-group-item bg-transparent d-flex align-items-start py-3">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Enquiry & Prospectus Collection</div>
              Obtain the school prospectus and admission form from the school administration office during working hours. Initial enquiries can also be made via phone or email. <Link to="/contact" className="fw-medium">Contact Us</Link>.
            </div>
          </li>
          <li className="list-group-item bg-transparent d-flex align-items-start py-3">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Application Form Submission</div>
              Carefully fill out the admission form and submit it along with all required documents (listed below) to the office before the announced deadline.
            </div>
          </li>
          <li className="list-group-item bg-transparent d-flex align-items-start py-3">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Interaction / Assessment (If Applicable)</div>
              Depending on the class level, a brief, friendly interaction with the child and parents or a simple readiness assessment may be scheduled. Details will be provided upon form submission.
            </div>
          </li>
          <li className="list-group-item bg-transparent d-flex align-items-start py-3">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Admission Offer & Confirmation</div>
              Successful candidates, selected based on criteria and seat availability, will be notified via official communication channels (Phone/Email/Notice Board).
            </div>
          </li>
          <li className="list-group-item bg-transparent d-flex align-items-start py-3">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Fee Payment & Formalities</div>
              Complete the admission by paying the necessary fees and submitting any pending documents within the specified timeframe to secure the student's place.
            </div>
          </li>
        </ol>
        <p className="mt-4 text-muted small text-center">
          <i className="bi bi-info-circle me-1"></i> The admission process is subject to seat availability and adherence to school policies. Please contact the office directly for the most current details.
        </p>
      </section>


       <section className="row g-4 mb-5">
            <div className="col-lg-6 d-flex align-items-stretch">
                <div className="card h-100 border-0 shadow-sm p-4">
                     <h3 className="h4 fw-semibold mb-3">
                        <i className="bi bi-person-check-fill me-2 text-success"></i>Eligibility Criteria
                    </h3>
                    <p className="text-secondary">Age is the primary criterion for admission to entry-level classes. As of March 31st, {currentAcademicYear.split('-')[0]}:</p>
                    <ul className="list-unstyled text-secondary">
                        <li className="mb-2"><i className="bi bi-check text-success me-2"></i><strong>Nursery / LKG:</strong> Minimum Age [e.g., 3] Years</li>
                        <li className="mb-2"><i className="bi bi-check text-success me-2"></i><strong>Class I:</strong> Minimum Age [e.g., 5 or 6] Years</li>
                        <li className="mb-2"><i className="bi bi-check text-success me-2"></i><strong>Other Classes (II onwards):</strong> Based on passing certificate from the previous recognized school & seat availability.</li>
                    </ul>
                    <p className="text-muted small mt-auto mb-0">
                        <i className="bi bi-info-circle me-1"></i> Specific age relaxations or requirements may apply. Please confirm with the admission office.
                    </p>
                </div>
            </div>
            <div className="col-lg-6 d-flex align-items-stretch">
                <div className="card h-100 border-0 shadow-sm p-4">
                     <h3 className="h4 fw-semibold mb-3">
                        <i className="bi bi-files me-2 text-info"></i>Required Documents
                    </h3>
                    <p className="text-secondary">Submit clear photocopies (originals needed for verification) of:</p>
                     <ul className="list-unstyled text-secondary">
                         <li className="mb-1"><i className="bi bi-dot text-info me-1"></i>Birth Certificate (Official Copy)</li>
                         <li className="mb-1"><i className="bi bi-dot text-info me-1"></i>Transfer Certificate (TC) - Class II+</li>
                         <li className="mb-1"><i className="bi bi-dot text-info me-1"></i>Previous Year's Report Card</li>
                         <li className="mb-1"><i className="bi bi-dot text-info me-1"></i>Passport-size Photos (Child: 3-4, Parents: 1 each)</li>
                         <li className="mb-1"><i className="bi bi-dot text-info me-1"></i>Aadhaar Card (Child & Parents, if available)</li>
                         <li className="mb-1"><i className="bi bi-dot text-info me-1"></i>Proof of Residence (e.g., Utility Bill, Rent Agreement)</li>
                     </ul>
                </div>
            </div>
       </section>

        <section className="row g-4 mb-5">
             <div className="col-lg-6 d-flex align-items-stretch">
                 <div className="card h-100 border-0 shadow-sm p-4 bg-light">
                      <h3 className="h4 fw-semibold mb-3">
                        <i className="bi bi-calendar-check-fill me-2 text-warning"></i>Important Dates ({currentAcademicYear})
                    </h3>
                    <p className="text-secondary">Tentative Schedule (Please confirm exact dates from the office):</p>
                    <ul className="list-unstyled text-secondary">
                        <li className="mb-2"><i className="bi bi-caret-right-fill text-warning me-2"></i><strong>Form Distribution Starts:</strong> [e.g., November 15th, 2023]</li>
                        <li className="mb-2"><i className="bi bi-caret-right-fill text-warning me-2"></i><strong>Last Date for Submission:</strong> [e.g., December 31st, 2023]</li>
                        <li className="mb-2"><i className="bi bi-caret-right-fill text-warning me-2"></i><strong>Interaction/Assessment Dates:</strong> [e.g., Mid-January 2024]</li>
                        <li className="mb-2"><i className="bi bi-caret-right-fill text-warning me-2"></i><strong>Admission List Declaration:</strong> [e.g., End of January 2024]</li>
                        <li className="mb-2"><i className="bi bi-caret-right-fill text-warning me-2"></i><strong>Fee Payment Window:</strong> [e.g., First week of February 2024]</li>
                    </ul>
                    <p className="text-muted small mt-auto mb-0">
                        <i className="bi bi-info-circle me-1"></i> Dates are subject to change. Stay updated via school notices.
                    </p>
                 </div>
             </div>
              <div className="col-lg-6 d-flex align-items-stretch">
                 <div className="card h-100 border-0 shadow-sm p-4">
                       <h3 className="h4 fw-semibold mb-3">
                         <i className="bi bi-currency-rupee me-2 text-danger"></i>Fee Structure
                    </h3>
                    <p className="text-secondary">
                        We strive to provide quality education at a reasonable cost. Our fee structure includes admission fees, tuition fees, and other applicable charges like transportation or activity fees.
                    </p>
                     <p className="text-secondary">
                        A detailed breakdown of the fee structure for the academic year {currentAcademicYear} is available in the school prospectus and can be obtained from the admission office.
                    </p>
                    <p className="text-muted small mt-auto mb-0">
                       Please contact the accounts department for specific fee details and payment schedules.
                    </p>
                 </div>
             </div>
        </section>

      <section className="p-5 bg-primary text-white rounded shadow text-center">
        <h2 className="h3 fw-bold mb-3">Have Questions or Ready to Apply?</h2>
        <p className="lead mb-4">
          Our admission team is ready to assist you. Visit our office or get in touch for any queries regarding the admission process.
        </p>
        <Link to="/contact" className="btn btn-lg btn-light">
            <i className="bi bi-telephone-fill me-2"></i>Contact Admission Office
        </Link>
      </section>
    </main>
  );
}

export default AdmissionsPage;