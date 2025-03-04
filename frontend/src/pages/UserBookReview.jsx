import React, { useEffect, useState } from 'react';
import authApi from '../api/authApi';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function UserBookReview() {
  const { username } = useParams();
  const navigate = useNavigate();
  const loginUsername = useSelector((state) => state.auth.username);
  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    const fetchUserReviews = async () => {
      try {
        const reviews = await authApi.getUserReviews("opopop");
        setUserReviews(reviews.data.userBookReviews);
      } catch (e) {
        console.error(e);
      }
    };
    
    fetchUserReviews();
  }, []);

  return (
    <>
      {userReviews.length > 0 ? (
        userReviews.map((review) => (
          <h1 key={review.id}>{review.title}</h1>
        ))
      ) : (
        <p>리뷰가 없습니다.</p>
      )}
    </>
  );
}
