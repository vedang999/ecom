import React from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'; // Using react-icons for the thumbs icons

function QuestionAnswer({ question, answer, date, likes, dislikes }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', padding: '10px', borderRadius: '5px', border: '1px solid lightgrey' }}>
      <div>
        <p><strong>Q: {question}</strong></p>
        <p>{answer}</p>
        <p style={{ fontSize: '0.8em', color: 'grey' }}>{date}</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '15px' }}>
          <FaThumbsUp style={{ marginRight: '5px' }} /> {likes}
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaThumbsDown style={{ marginRight: '5px' }} /> {dislikes}
        </div>
      </div>
    </div>
  );
}

export default QuestionAnswer;
