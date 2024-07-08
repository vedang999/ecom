import React, { useState } from 'react';

function AdditionalInfoToggle() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleInfo = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={{ maxWidth: '100%', margin: '20px 0px' }}>
      <h2 style={{ cursor: 'pointer', borderTop: '1px solid #ccc' , fontSize: '20px', color: '#831000' }} onClick={toggleInfo}>
        {isExpanded ? '- Additional Information' : '+ Additional Information'}
      </h2>
      {isExpanded && (
        <div style={{ marginTop: '10px', lineHeight: '1.2' }}>
          <p><strong>SIZE:</strong> 13 UK</p>
          <p><strong>MATERIAL:</strong> Cotton</p>
          <p><strong>COMPANY OF ORIGIN:</strong> India</p>
          <p>
            PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess
            free removal Pressure sensitive. PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for
            easy bubble free install & mess free removal Pressure sensitive. PlayStation 5 Controller Skin High quality
            vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive. PlayStation
            5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal
            Pressure sensitive.
          </p>
        </div>
      )}
    </div>
  );
}

export default AdditionalInfoToggle;
