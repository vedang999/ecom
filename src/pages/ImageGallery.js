import React, { useState } from 'react';
import image1 from '../pics/image1.png'; // adjust the path as necessary
import image2 from '../pics/image2.png'; // adjust the path as necessary
import image3 from '../pics/image3.png'; // adjust the path as necessary
import image4 from '../pics/image4.png';
function ImageGallery() {
  const [mainImage, setMainImage] = useState(image1); // Replace with actual path to main image
  const [thumbnails, setThumbnails] = useState([
    image1,
    image2,
    image3,
    image4,
  ]);

  const handleThumbnailClick = (thumbnail) => {
    setMainImage(thumbnail);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto', textAlign: 'center' }}>
      <img src={mainImage} alt="Main Product" style={{ maxWidth: '100%', maxHeight: '450px', marginBottom: '10px' }} />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {thumbnails.map((thumbnail, index) => (
          <img
            key={index}
            src={thumbnail}
            alt={`Thumbnail ${index + 1}`}
            style={{ width: '60px', height: '60px', margin: '0 10px', cursor: 'pointer', border: '1px solid #ccc' }}
            onClick={() => handleThumbnailClick(thumbnail)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
