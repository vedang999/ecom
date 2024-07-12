import React, { useState } from 'react';
import success from '../pics/success.png'; // Adjust the path as necessary

function AddToCartButton() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        padding: '0px',
        width: '100px',
        height: '36px',
        backgroundColor: isClicked ? '#F5E5FF' : '#DB4444',
        color: isClicked ? 'transparent' : 'white',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '5px',
        // position: 'relative', // You can optionally add this if necessary
        overflow: 'hidden',
      }}
    >
      {isClicked && (
        <img
          src={success} // Replace with actual path to your image
          alt="Added to Cart"
          style={{
            width: '100%', // Ensure the image takes up 100% of the button's width
            height: '100%', // Ensure the image takes up 100% of the button's height
            objectFit: 'contain', // Maintain aspect ratio and fit within the button
          }}
        />
      )}
      {!isClicked && 'Add to Cart'}
    </button>
  );
}

export default AddToCartButton;
