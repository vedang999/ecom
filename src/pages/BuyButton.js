import React, { useState } from 'react';

function BuyButton() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        padding: '10px 20px',
        border: '1px solid black', // Add black border
        backgroundColor: isHovered ? '#AC2B2B' : '#DB4444',
        color: isHovered ? 'white' : 'white',
        cursor: 'pointer',
        borderRadius: '5px',
        transition: 'background-color 0.3s ease',
      }}
    >
      Buy Now
    </button>
  );
}

export default BuyButton;
