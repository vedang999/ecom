import React from 'react';
import './StarRating.css';

const StarRating = ({ rating, totalReviews }) => {
  const fullStars = Math.floor(rating);
//   const halfStars = rating % 1 !== 0 ? 1 : 0;
  const emptyStars = 5 - fullStars;

  const renderStars = () => {
    let stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star filled">★</span>);
    }
    // if (halfStars) {
    //   stars.push(<span key="half" className="star half">★</span>);
    // }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={i + fullStars} className="star empty">★</span>);
    }
    return stars;
  };

  return (
    <div className="star-rating">
      {renderStars()}
      <span>({totalReviews} Reviews)</span>
    </div>
  );
};

export default StarRating;
