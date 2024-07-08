import React from 'react';
import { FaStar } from 'react-icons/fa'; // Using react-icons for the star icon

function Review({ profileImage, rating, accountName, date, reviewText }) {
  const stars = Array(5).fill(0).map((_, index) => (
    <FaStar key={index} color={index < rating ? 'orange' : 'lightgrey'} />
  ));

  return (
    <div>
    <div style={{ display: 'flex', marginTop: '10px', padding: '10px', borderRadius: '5px', border: '1px solid lightgrey'}}>
      <img
        src={profileImage}
        alt="Profile"
        style={{ width: '70px', height: '70px', borderRadius: '5px', marginRight: '20px' }}
      />
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {stars}
          <span style={{ marginLeft: '5px' }}>({rating})</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <span style={{ fontWeight: 'bold' }}>{accountName}</span>
          <span style={{marginLeft: '20px'}}>{date}</span>
        </div>
        <p>{reviewText}</p>
      </div>
    </div>
      {/* <hr/> */}
      </div>
  );
}

export default Review;
