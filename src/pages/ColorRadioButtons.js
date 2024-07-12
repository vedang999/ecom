import React, { useState } from 'react';

function ColorRadioButtons() {
  const [selectedColor, setSelectedColor] = useState('green');

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <label style={{ marginRight: '10px' }}>
        <input
          type="radio"
          name="color"
          value="green"
          checked={selectedColor === 'green'}
          onChange={() => handleColorChange('green')}
          style={{ display: 'none' }}
        />
        <span
          style={{
            display: 'inline-block',
            width: '15px',
            height: '15px',
            backgroundColor: 'green',
            borderRadius: '50%',
            border: selectedColor === 'green' ? '2px solid black' : '2px solid transparent',
            cursor: 'pointer',
          }}
          onClick={() => handleColorChange('green')}
        ></span>
      </label>
      <label>
        <input
          type="radio"
          name="color"
          value="purple"
          checked={selectedColor === 'purple'}
          onChange={() => handleColorChange('purple')}
          style={{ display: 'none' }}
        />
        <span
          style={{
            display: 'inline-block',
            width: '15px',
            height: '15px',
            backgroundColor: 'purple',
            borderRadius: '50%',
            border: selectedColor === 'purple' ? '2px solid black' : '2px solid transparent',
            cursor: 'pointer',
          }}
          onClick={() => handleColorChange('purple')}
        ></span>
      </label>
    </div>
  );
}

export default ColorRadioButtons;
