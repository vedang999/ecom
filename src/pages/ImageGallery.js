import React, { useState } from 'react';
import image1 from '../pics/image1.png'; // adjust the path as necessary
import image2 from '../pics/image2.png'; // adjust the path as necessary
import image3 from '../pics/image3.png'; // adjust the path as necessary
import image4 from '../pics/image4.png';
import ReactImageMagnify from 'react-image-magnify';

function ImageGallery() {
  const [mainImage, setMainImage] = useState(image2); // Replace with actual path to main image
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
<ReactImageMagnify
  smallImage={{
    alt: 'Wristwatch by Ted Baker London',
    isFluidWidth: true,
    src: mainImage, // Assuming mainImage is a variable containing the source URL
    style: { maxWidth: '70%', maxHeight: '450px', marginBottom: '10px' }
  }}
  largeImage={{
    alt: '', // Add your alt text if necessary
    src: mainImage, // Assuming image1 is a variable containing the source URL for the large image
    width: 1000,
    height: 1000
  }}
/>

      {/* <img src={mainImage} alt="Main Product" style={{ maxWidth: '100%', maxHeight: '450px', marginBottom: '10px' }} /> */}
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
