import React, { useState } from 'react';

function AdditionalInfoToggle() {
  const [isExpanded, setIsExpanded] = useState(true);

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
        <p style={{ fontSize:'16px', marginTop: '10px', lineHeight: '1.2' }}>
        <strong>SIZE:</strong> 13 UK</p>
          <p style={{ fontSize:'16px', marginTop: '10px', lineHeight: '1.2' }}>
          <strong>MATERIAL:</strong> Cotton</p>
          <p style={{ fontSize:'16px', marginTop: '10px', lineHeight: '1.2' }}>
          <strong>COMPANY OF ORIGIN:</strong> India</p>
          <p style={{ fontSize:'16px', marginTop: '10px', lineHeight: '1.2' }}>
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
