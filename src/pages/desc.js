import React, { useState } from 'react';

function DescriptionToggle() {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={{ maxWidth: '90%', margin: '20px 0px' }}>
      <h2 style={{ cursor: 'pointer', borderTop: '1px solid #ccc', fontSize: '20px' , color: '#831000' }} onClick={toggleDescription}>
        {isExpanded ? '- Description' : '+ Description'}
      </h2>
      {isExpanded && (
        <p style={{ marginTop: '10px', lineHeight: '1.2' }}>
          PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess
          free removal Pressure sensitive. PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for
          easy bubble free install & mess free removal Pressure sensitive. PlayStation 5 Controller Skin High quality
          vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive. PlayStation
          5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal
          Pressure sensitive.
        </p>
      )}
    </div>
  );
}

export default DescriptionToggle;
