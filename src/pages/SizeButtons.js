import React, { useState } from 'react';

function SizeButtons() {
  const [selectedSize, setSelectedSize] = useState('');

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ marginRight: '10px' }}>Size:</span>
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => handleSizeClick(size)}
          style={{
            padding: '10px',
            margin: '0 5px',
            border: '1px solid black',
            backgroundColor: selectedSize === size ? '#DB4444' : 'white',
            color: selectedSize === size ? 'white' : 'black',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
        >
          {size}
        </button>
      ))}
    </div>
  );
}

export default SizeButtons;
