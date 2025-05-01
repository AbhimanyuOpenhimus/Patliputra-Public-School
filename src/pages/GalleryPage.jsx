import React from 'react';
import ImageGallery from '../components/ImageGallery';

// Import your images (adjust paths as needed)
import galleryImg1 from '../assets/images/gallery1.jpg';
import galleryImg2 from '../assets/images/gallery2.jpg';
// Add more imports

const schoolImages = [
  { src: galleryImg1, alt: 'School Event 1' },
  { src: galleryImg2, alt: 'Campus View' },
  // Add more image objects
];

function GalleryPage() {
  return (
    <div>
      <h2 className="mb-4 border-bottom pb-2">School Gallery</h2>
      <p className="lead mb-4">A glimpse into life at Patliputra Public School.</p>
      <ImageGallery images={schoolImages} />
    </div>
  );
}

export default GalleryPage;