import React, { useState } from 'react';

function TabToggle() {
  const [activeTab, setActiveTab] = useState('reviews');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          onClick={() => handleTabClick('reviews')}
          style={{
            padding: '10px 20px',
            cursor: 'pointer',
            backgroundColor: activeTab === 'reviews' ? '#DB4444' : '#FFFFFF',
            color: activeTab === 'reviews' ? '#FFFFFF' : '#000000',
            borderTopLeftRadius: '5px',
            borderBottomLeftRadius: '5px',
            border: '1px solid #DB4444',
          }}
        >
          Reviews (150)
        </div>
        <div
          onClick={() => handleTabClick('qna')}
          style={{
            padding: '10px 20px',
            cursor: 'pointer',
            backgroundColor: activeTab === 'qna' ? '#DB4444' : '#FFFFFF',
            color: activeTab === 'qna' ? '#FFFFFF' : '#000000',
            borderTopRightRadius: '5px',
            borderBottomRightRadius: '5px',
            border: '1px solid #DB4444',
          }}
        >
          QnA
        </div>
      </div>
      {activeTab === 'reviews' && (
        <div style={{ marginTop: '10px', padding: '10px', border: '1px solid #DB4444', borderRadius: '5px' }}>
          {/* Reviews Component or Content */}
          <p>Placeholder for Reviews component or content...</p>
        </div>
      )}
      {activeTab === 'qna' && (
        <div style={{ marginTop: '10px', padding: '10px', border: '1px solid #DB4444', borderRadius: '5px' }}>
          {/* QnA Component or Content */}
          <p>Placeholder for QnA component or content...</p>
        </div>
      )}
    </div>
  );
}

export default TabToggle;
