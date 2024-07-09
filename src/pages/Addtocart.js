import React, { useState } from 'react';
import success from '../pics/success.png'; // adjust the path as necessary

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
        width: '100px', // Set a fixed width for the button
        height: '36px', // Set a fixed height for the button
        backgroundColor: isClicked ? '#F5E5FF' : '#DB4444',
        color: isClicked ? 'transparent' : 'white',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '5px',
        position: 'sticky',
        // zIndex: -1, // Add zIndex to ensure it stays above other elements
        overflow: 'hidden',
      }}
    >
      {isClicked ? (
        <img
          src={success} // Replace with actual path to your image
          alt="Added to Cart"
          style={{            
             position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '100%',
            maxHeight: '100%',
          }}
        />
      ) : (
        'Add to Cart'
      )}
    </button>
  );
}

export default AddToCartButton;
