import React from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'; // Using react-icons for the thumbs icons
import styles from '../styles/Que.module.scss'; // Adjust the path as necessary

function QuestionAnswer({ question, answer, date, likes, dislikes }) {
  return (
    <div className={styles.qaContainer}>
      <div>
        <p className={styles.questionAnswerText}><strong>Q: {question}</strong></p>
        <p className={styles.questionAnswerText}>{answer}</p>
        <p className={styles.dateText}>{date}</p>
      </div>
      <div className={styles.likesDislikesContainer}>
        <div className={styles.likesDislikesItem}>
          <FaThumbsUp className={styles.iconWithMargin} /> {likes}
        </div>
        <div className={styles.likesDislikesItem}>
          <FaThumbsDown className={styles.iconWithMargin} /> {dislikes}
        </div>
      </div>
    </div>
  );
}

export default QuestionAnswer;
