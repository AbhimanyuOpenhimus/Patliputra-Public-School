import React from 'react';

// Pass images as a prop
function ImageGallery({ images }) {
  if (!images || images.length === 0) {
    return <p className="text-center text-muted">No images to display.</p>;
  }

  return (
    // Use Bootstrap's row and column classes for a responsive grid
    <div className="row g-3"> {/* g-3 adds gutters between columns */}
      {images.map((image, index) => (
        // Adjust column classes for desired layout (e.g., 2, 3, or 4 per row)
        <div key={index} className="col-6 col-md-4 col-lg-3">
          <div className="gallery-item"> {/* Optional: Add custom class if needed */}
            <img
              src={image.src}
              alt={image.alt}
              className="img-fluid rounded shadow-sm" // img-fluid makes it responsive
              style={{ aspectRatio: '4/3', objectFit: 'cover' }} // Maintain aspect ratio
            />
            {/* Optional Caption */}
             {/* <p className="text-center small mt-1">{image.alt}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ImageGallery;