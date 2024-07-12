import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import styles from '../styles/AddReview.module.scss'; // Adjust the path as necessary

function AddReview({ onAddReview }) {
  const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const [profileImage, setProfileImage] = useState('');
  const [rating, setRating] = useState(1);
  const [accountName, setAccountName] = useState('proxy');
  const [date, setDate] = useState(getCurrentDate());
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      profileImage,
      rating,
      accountName,
      date,
      reviewText
    };
    onAddReview(newReview);
    setProfileImage('');
    setRating(1);
    setAccountName('proxy');
    setDate(getCurrentDate());
    setReviewText('');
  };

  return (
    <form className={styles.addReviewForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label><h3>Let Us Know What you Think!!</h3></label>
      </div>
      <div className={styles.formGroup}>
        <label>Rating</label>
        <div className={styles.stars}>
          {Array(5).fill(0).map((_, index) => (
            <FaStar
              key={index}
              color={index < rating ? 'orange' : 'lightgrey'}
              onClick={() => setRating(index + 1)}
            />
          ))}
        </div>
      </div>
      <div className={styles.formGroup}>
        <label>Review</label>
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit Review</button>
    </form>
  );
}

export default AddReview;
