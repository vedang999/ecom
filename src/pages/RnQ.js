import React, { useState } from 'react';
import Review from './Review'; // Adjust the path as needed
import image1 from '../pics/image1.png'; // adjust the path as necessary
import QuestionAnswer from './QuestionAnswer';
import AddReview from './AddReview'

function TabToggle() {
  const [activeTab, setActiveTab] = useState('reviews');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const [reviews, setReviews] = useState([]);

  const handleAddReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };
  return (
    <div style={{ maxWidth: '100%', margin: '20px auto' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          onClick={() => handleTabClick('reviews')}
          style={{
            padding: '10px 20px',
            cursor: 'pointer',
            color: activeTab === 'reviews' ? '#DD3030' : '#000000',
            borderTopLeftRadius: '5px',
            borderBottomLeftRadius: '5px',
          }}
        >
          Reviews (150)
        </div>
        <div className="tab-space"style={{
            padding: '10px 20px'}}>|</div>

        <div
          onClick={() => handleTabClick('qna')}
          style={{
            padding: '10px 20px',
            cursor: 'pointer',
            color: activeTab === 'qna' ? '#DD3030' : '#000000',
            borderTopRightRadius: '5px',
            borderBottomRightRadius: '5px',
          }}
        >
          QnA
        </div>
      </div>
      {activeTab === 'reviews' && (
        <div style={{ marginTop: '10px', padding: '10px', borderRadius: '5px', border: '1px solid lightgrey'}}>
          {/* Reviews Component or Content */}
          {/* <p>Placeholder for Reviews component or content...</p> */}
          {/* <hr></hr> */}
          <Review
          profileImage={image1} // Replace with the actual path or URL
          rating={4}
          accountName="account 1"
          date="2024-07-12"
          reviewText="This item looks good..."
        />
        <Review
          profileImage={image1} // Replace with the actual path or URL
          rating={4}
          accountName="account 1"
          date="2024-07-12"
          reviewText="This item looks good..."
        />
        <Review
          profileImage={image1} // Replace with the actual path or URL
          rating={4}
          accountName="account 1"
          date="2024-07-12"
          reviewText="This item looks good..."
        />
        <Review
          profileImage={image1} // Replace with the actual path or URL
          rating={4}
          accountName="account 1"
          date="2024-07-12"
          reviewText="This item looks good..."
        />
              {/* <div > */}
        {reviews.map((review, index) => (
          <Review
            key={index}
            profileImage={review.profileImage}
            rating={review.rating}
            accountName={review.accountName}
            date={review.date}
            reviewText={review.reviewText}
          />
        ))}
      {/* </div> */}
<div style={{ alignItems: "center", display: "flex",color:"coral" }}>View more</div>
      <br></br>
              <AddReview onAddReview={handleAddReview} />


        </div>
      )}
      {activeTab === 'qna' && (
      <div style={{ marginTop: '10px', padding: '10px', borderRadius: '5px', border: '1px solid lightgrey' }}>
      <QuestionAnswer
        question="Does it have warranty?"
        answer="Yes, for 6 months"
        date="01/03/2024"
        likes={203}
        dislikes={19}
      />
            <QuestionAnswer
        question="Does it have warranty?"
        answer="Yes, for 6 months"
        date="01/03/2024"
        likes={203}
        dislikes={19}
      />
            <QuestionAnswer
        question="Does it have warranty?"
        answer="Yes, for 6 months"
        date="01/03/2024"
        likes={203}
        dislikes={19}
      />
<div style={{ alignItems: "center", display: "flex",color:"coral" }}>View more</div>
</div>
      )}
    </div>
  );
}

export default TabToggle;
