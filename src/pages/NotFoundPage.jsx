
import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <main className="container d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
      
      <div className="text-center p-5 bg-light rounded shadow-sm">

        
        <i className="bi bi-emoji-dizzy-fill display-1 text-warning mb-3"></i>

        
        <h1 className="display-1 fw-bold text-secondary mb-3">404</h1>

        
        <h2 className="display-5 fw-semibold mb-3">Oops! Page Not Found</h2>

        
        <p className="lead text-muted mb-4">
          Sorry, the page you were looking for doesn't exist. It might have been moved, deleted, or perhaps you mistyped the URL.
        </p>
        <Link to="/" className="btn btn-primary btn-lg">
          <i className="bi bi-house-door-fill me-2"></i>Go Back to Homepage
        </Link>

      </div>
    </main>
  );
}

export default NotFoundPage;