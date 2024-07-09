import React from 'react';
import { FaStar } from 'react-icons/fa'; // Using react-icons for the star icon
import styles from '../styles/Review.module.scss'; // Adjust the path as necessary

function Review({ profileImage, rating, accountName, date, reviewText }) {
  const stars = Array(5).fill(0).map((_, index) => (
    <FaStar key={index} color={index < rating ? 'orange' : 'lightgrey'} />
  ));

  return (
    <div className={styles.reviewContainer}>
      <img
        src={profileImage}
        alt="Profile"
        className={styles.profileImage}
      />
      <div>
        <div className={styles.reviewHeader}>
          {stars}
          <span className={styles.ratingStars}>({rating})</span>
        </div>
        <div className={styles.reviewDetails}>
          <span className={styles.accountName}>{accountName}</span>
          <span>{date}</span>
        </div>
        <p className={styles.reviewText}>{reviewText}</p>
      </div>
    </div>
  );
}

export default Review;
