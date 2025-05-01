import React from 'react';
import { Link } from 'react-router-dom';

function AcademicsPage() {
  return (
    <main className="container py-5">
      <section className="text-center mb-5 pb-4 border-bottom">
        <h1 className="display-4 fw-bold mb-3">
          <i className="bi bi-mortarboard-fill me-2 text-primary"></i>Academics at Patliputra
        </h1>
        <p className="lead text-muted col-lg-9 mx-auto">
          Explore our comprehensive curriculum, innovative teaching methods, and the diverse academic programs designed to foster intellectual growth and prepare students for a successful future.
        </p>
      </section>

      <section className="mb-5 p-4 p-md-5 bg-light rounded shadow-sm">
        <div className="row align-items-center">
          <div className="col-md-2 text-center mb-3 mb-md-0">
             <i className="bi bi-journal-bookmark-fill display-3 text-primary"></i>
          </div>
          <div className="col-md-10">
            <h2 className="h3 fw-semibold mb-3">Our Curriculum Framework</h2>
            <p className="lead mb-2">
              We are proudly affiliated with the <strong>CBSE (Central Board of Secondary Education)</strong>, adhering to its rigorous and well-rounded curriculum framework.
            </p>
            <p className="text-secondary mb-0">
              Our academic philosophy extends beyond traditional learning. We focus on cultivating essential 21st-century skills such as critical thinking, complex problem-solving, effective communication, and collaboration. We leverage modern pedagogical techniques and technology integration to create dynamic and engaging learning experiences that cater to diverse student needs.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <h2 className="text-center fw-bold mb-4">
          <i className="bi bi-diagram-3-fill me-2 text-success"></i>Academic Programs Offered
        </h2>
        <p className="text-center text-muted col-lg-8 mx-auto mb-5">
            We provide a structured and progressive academic journey through distinct educational stages.
        </p>
        <div className="row g-4 justify-content-center">
            {/* Primary Wing Card */}
            <div className="col-md-6 col-lg-5 d-flex align-items-stretch">
                <div className="card h-100 border-0 shadow-sm overflow-hidden">
                    <div className="card-header bg-primary text-white">
                        <h3 className="h5 mb-0 fw-semibold"><i className="bi bi-pencil-fill me-2"></i>Primary Wing (Classes I - V)</h3>
                    </div>
                    <div className="card-body d-flex flex-column">
                        <p className="card-text text-secondary">Building strong foundations in literacy, numeracy, and environmental science. Emphasis on developing cognitive and motor skills through interactive, play-based methods and creative expression.</p>
                         <ul className="list-unstyled mt-auto text-primary small">
                            <li><i className="bi bi-stars me-1"></i> Foundational Learning</li>
                            <li><i className="bi bi-palette-fill me-1"></i> Activity-Based Learning</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Middle Wing Card */}
            <div className="col-md-6 col-lg-5 d-flex align-items-stretch">
                 <div className="card h-100 border-0 shadow-sm overflow-hidden">
                    <div className="card-header bg-success text-white">
                        <h3 className="h5 mb-0 fw-semibold"><i className="bi bi-lightbulb-fill me-2"></i>Middle Wing (Classes VI - VIII)</h3>
                    </div>
                    <div className="card-body d-flex flex-column">
                        <p className="card-text text-secondary">Transitioning to formal subjects like Science, Mathematics, Social Studies, and multiple Languages. Fostering analytical skills, research abilities, and collaborative learning through projects and group activities.</p>
                         <ul className="list-unstyled mt-auto text-success small">
                            <li><i className="bi bi-search me-1"></i> Inquiry-Based Learning</li>
                            <li><i className="bi bi-people-fill me-1"></i> Collaborative Projects</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Secondary Wing Card */}
            <div className="col-md-6 col-lg-5 d-flex align-items-stretch">
                 <div className="card h-100 border-0 shadow-sm overflow-hidden">
                     <div className="card-header bg-warning text-dark">
                        <h3 className="h5 mb-0 fw-semibold"><i className="bi bi-clipboard-data-fill me-2"></i>Secondary Wing (Classes IX - X)</h3>
                    </div>
                     <div className="card-body d-flex flex-column">
                        <p className="card-text text-secondary">Intensive preparation for CBSE board examinations. Focus on conceptual clarity, application of knowledge, practical lab work, and developing effective study habits. Introduction to career awareness.</p>
                         <ul className="list-unstyled mt-auto text-warning small">
                            <li><i className="bi bi-graph-up me-1"></i> Board Exam Focus</li>
                            <li><i className="bi bi-tools me-1"></i> Practical Application</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Senior Secondary Wing Card */}
            <div className="col-md-6 col-lg-5 d-flex align-items-stretch">
                 <div className="card h-100 border-0 shadow-sm overflow-hidden">
                     <div className="card-header bg-danger text-white">
                        <h3 className="h5 mb-0 fw-semibold"><i className="bi bi-compass-fill me-2"></i>Senior Secondary Wing (XI - XII)</h3>
                    </div>
                    <div className="card-body d-flex flex-column">
                        <p className="card-text text-secondary">Specialized streams equipping students for higher education and professional pathways. Rigorous academic training combined with career guidance and counseling.</p>
                        <h6 className="fw-semibold mt-2">Streams Offered:</h6>
                        <ul className="list-unstyled small mb-2">
                             <li><i className="bi bi-calculator-fill me-1 text-danger"></i><strong>Science:</strong> Phy, Chem, Maths, Bio/CS, Eng</li>
                             <li><i className="bi bi-briefcase-fill me-1 text-danger"></i><strong>Commerce:</strong> Acc, BST, Eco, Maths/IP, Eng</li>
                             {/* <li><i className="bi bi-palette-fill me-1 text-danger"></i><strong>Arts:</strong> Optional - Add if applicable</li> */}
                        </ul>
                         <ul className="list-unstyled mt-auto text-danger small">
                           <li><i className="bi bi-binoculars-fill me-1"></i> Career Specialization</li>
                           <li><i className="bi bi-trophy-fill me-1"></i> Competitive Edge</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className="mb-5 py-5 bg-light rounded shadow-sm">
        <div className="container">
            <h2 className="text-center fw-bold mb-4">
                <i className="bi bi-person-workspace me-2 text-info"></i>Innovative Teaching Methodology
            </h2>
            <p className="text-center text-muted col-lg-8 mx-auto mb-5">
                Our faculty utilizes diverse and effective teaching strategies to engage students and enhance learning outcomes.
            </p>
            <div className="row g-4">
                <div className="col-md-6 col-lg-4">
                    <div className="d-flex align-items-start">
                        <i className="bi bi-check-circle-fill fs-4 text-info me-3"></i>
                        <div>
                            <h4 className="h6 fw-semibold mb-1">Interactive Sessions</h4>
                            <p className="small text-secondary mb-0">Engaging discussions and activities that encourage active participation.</p>
                        </div>
                    </div>
                </div>
                 <div className="col-md-6 col-lg-4">
                    <div className="d-flex align-items-start">
                        <i className="bi bi-check-circle-fill fs-4 text-info me-3"></i>
                        <div>
                            <h4 className="h6 fw-semibold mb-1">Digital Integration</h4>
                            <p className="small text-secondary mb-0">Use of smart boards, online resources, and educational software.</p>
                        </div>
                    </div>
                </div>
                 <div className="col-md-6 col-lg-4">
                    <div className="d-flex align-items-start">
                        <i className="bi bi-check-circle-fill fs-4 text-info me-3"></i>
                        <div>
                            <h4 className="h6 fw-semibold mb-1">Project-Based Learning</h4>
                            <p className="small text-secondary mb-0">Students explore real-world problems and challenges through extended projects.</p>
                        </div>
                    </div>
                </div>
                 <div className="col-md-6 col-lg-4">
                    <div className="d-flex align-items-start">
                        <i className="bi bi-check-circle-fill fs-4 text-info me-3"></i>
                        <div>
                            <h4 className="h6 fw-semibold mb-1">Experiential Learning</h4>
                            <p className="small text-secondary mb-0">Hands-on activities, experiments, and field trips to reinforce concepts.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="d-flex align-items-start">
                        <i className="bi bi-check-circle-fill fs-4 text-info me-3"></i>
                        <div>
                            <h4 className="h6 fw-semibold mb-1">Differentiated Instruction</h4>
                            <p className="small text-secondary mb-0">Tailoring teaching methods to meet individual student learning styles and paces.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="d-flex align-items-start">
                        <i className="bi bi-check-circle-fill fs-4 text-info me-3"></i>
                        <div>
                            <h4 className="h6 fw-semibold mb-1">Remedial Support</h4>
                            <p className="small text-secondary mb-0">Providing extra help and support to students who need it.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

       <section className="row g-4 mb-5">
            <div className="col-md-6">
                <div className="p-4 bg-white rounded shadow-sm h-100">
                     <h3 className="h4 fw-semibold mb-3"><i className="bi bi-card-checklist me-2 text-secondary"></i>Assessment & Evaluation</h3>
                     <p className="text-secondary">We employ a continuous and comprehensive evaluation (CCE) approach, incorporating a variety of assessment tools:</p>
                     <ul className="list-unstyled text-secondary">
                        <li><i className="bi bi-caret-right-fill text-secondary me-1"></i> Formative Assessments (quizzes, assignments, projects)</li>
                        <li><i className="bi bi-caret-right-fill text-secondary me-1"></i> Summative Assessments (term-end examinations)</li>
                        <li><i className="bi bi-caret-right-fill text-secondary me-1"></i> Practical Examinations and Lab Work</li>
                        <li><i className="bi bi-caret-right-fill text-secondary me-1"></i> Regular Feedback and Parent-Teacher Interactions</li>
                     </ul>
                </div>
            </div>
            <div className="col-md-6">
                 <div className="p-4 bg-white rounded shadow-sm h-100">
                     <h3 className="h4 fw-semibold mb-3"><i className="bi bi-award-fill me-2 text-warning"></i>Beyond Academics</h3>
                     <p className="text-secondary">We believe in holistic development. Our academic curriculum is seamlessly integrated with a rich array of co-curricular and extracurricular activities, including:</p>
                      <ul className="list-unstyled text-secondary">
                        <li><i className="bi bi-caret-right-fill text-warning me-1"></i> Sports and Physical Education</li>
                        <li><i className="bi bi-caret-right-fill text-warning me-1"></i> Performing and Visual Arts (Music, Dance, Drama, Art)</li>
                        <li><i className="bi bi-caret-right-fill text-warning me-1"></i> Clubs and Societies (Debate, Science, Eco Club etc.)</li>
                        <li><i className="bi bi-caret-right-fill text-warning me-1"></i> Community Service Initiatives</li>
                     </ul>
                 </div>
            </div>
       </section>

        <section className="text-center p-4 bg-primary text-white rounded shadow">
            <h3 className="h4 mb-3">Meet Our Dedicated Educators</h3>
            <p className="mb-3">Our highly qualified and passionate faculty are the backbone of our academic success.</p>
            <Link to="/404" className="btn btn-outline-light">Learn About Our Faculty</Link>
        </section>

    </main>
  );
}

export default AcademicsPage;